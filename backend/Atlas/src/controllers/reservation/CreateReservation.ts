import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";
import {ReservationEntity} from "../../models/entity/ReservationEntity";
import {ReservationDTO} from "../../models/dto/ReservationDTO";
import { v4 as uuidv4 } from 'uuid';

export class CreateReservation extends BaseController {
    private reservationService: ReservationService;

    public initialize(httpServer: RestServer): void {
        httpServer.post('/reservations', this.execute.bind(this));
    }

    public constructor(reservationService: any) {
        super();
        this.reservationService = reservationService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            const reservationDTO: ReservationDTO = this.req.body;
            const reservationEntity: ReservationEntity = {
                id: uuidv4(),
                spot_id: reservationDTO.spot_id,
                user_id: "1",
                cancelled: false,
                start_datetime: reservationDTO.start_timestamp,
                end_datetime: reservationDTO.end_timestamp
            }

            await this.reservationService.save(reservationEntity);
            return await this.created(this.res);
        } catch (err) {
            return this.fail(err);
        }
    }
}
