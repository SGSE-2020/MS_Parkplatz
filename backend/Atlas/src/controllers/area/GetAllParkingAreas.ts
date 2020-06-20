import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ParkingAreaService} from "../../services/implementation/ParkingAreaService";
import {QuantizerDTO} from "../../models/dto/QuantizerDTO";
import {ParkingAreaDTO} from "../../models/dto/ParkingAreaDTO";
import {parkingAreaMapper} from "../../mapper/implementation/ParkingAreaMapper";

export class GetAllParkingAreas extends BaseController {
    private parkingAreaService: ParkingAreaService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/areas', this.execute.bind(this));
    }

    public constructor(parkingAreaService: any) {
        super();
        this.parkingAreaService = parkingAreaService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            let parkingAreaRepository = await this.parkingAreaService.getAllParkingAreas()

            let parkingAreas: ParkingAreaDTO[] = [];
            parkingAreaRepository[0].forEach(x => parkingAreas.push(parkingAreaMapper.toDTO(x)))

            const quantizerDTO: QuantizerDTO<ParkingAreaDTO> = {
                total_count: parkingAreaRepository[1],
                items: parkingAreas
            };

            return await this.ok<QuantizerDTO<ParkingAreaDTO>>(this.res, quantizerDTO);
        } catch (err) {
            return this.fail(err);
        }
    }
}
