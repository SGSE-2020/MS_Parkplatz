import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";
import {QuantizerDTO} from "../../models/dto/QuantizerDTO";
import {ReservationDTO} from "../../models/dto/ReservationDTO";
import {ReservationEntity} from "../../models/entity/ReservationEntity";
import {ParkingAreaService} from "../../services/implementation/ParkingAreaService";

export class GetAllUserReservations extends BaseController {
    private reservationService: ReservationService;
    private areaService: ParkingAreaService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/reservations', this.execute.bind(this));
    }

    public constructor(reservationService: any, areaService: any) {
        super();
        this.reservationService = reservationService;
        this.areaService = areaService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            // @ts-ignore
            const userUid = this.req.userUid;
            let reservationRepository = await this.reservationService.getAllReservationsForUserId(userUid);
            let areaRepository = await this.areaService.getAllParkingAreas();

            let reservations: ReservationDTO[] = [];
            reservationRepository[0].forEach(x => reservations.push({
                end_timestamp: x.end_datetime,
                expired: !GetAllUserReservations.isFutureDate(x.end_datetime),
                reservation_id: x.id,
                area_id: x.area_id,
                area_name: areaRepository[0].find(i => i.id == x.area_id).displayName,
                note: x.note,
                start_timestamp: x.start_datetime,
                state: GetAllUserReservations.getState(x)
            }))

            const quantizerDTO: QuantizerDTO<ReservationDTO> = {
                total_count: reservationRepository[1],
                items: reservations
            };
            return await this.ok<QuantizerDTO<ReservationDTO>>(this.res, quantizerDTO);
        } catch (err) {
            return this.fail(err);
        }
    }

    private static getState(reservation: ReservationEntity): string {
        return reservation.cancelled ? 'Cancelled' :
            GetAllUserReservations.isFutureDate(reservation.start_datetime) ? 'Pending' :
                'Expired';
    }

    private static isFutureDate(date: number): boolean {
        return date * 1000 > new Date().getTime();
    }
}
