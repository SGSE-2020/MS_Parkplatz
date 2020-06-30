import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";
import {QuantizerDTO} from "../../models/dto/QuantizerDTO";
import {ReservationDTO} from "../../models/dto/ReservationDTO";
import {ReservationEntity} from "../../models/entity/ReservationEntity";
import {ParkingAreaService} from "../../services/implementation/ParkingAreaService";

export class GetNextUserReservations extends BaseController {
    private reservationService: ReservationService;
    private areaService: ParkingAreaService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/reservations/latest', this.execute.bind(this));
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
            let reservationRepository = await this.reservationService.getNextReservationsForUserId(userUid);
            let areaRepository = await this.areaService.getAllParkingAreas();
            let reservation: ReservationDTO[] = [];
            reservation.push({
                end_timestamp: reservationRepository.end_datetime,
                expired: !GetNextUserReservations.isFutureDate(reservationRepository.end_datetime),
                reservation_id: reservationRepository.id,
                area_id: reservationRepository.area_id,
                area_name: areaRepository[0].find(i => i.id == reservationRepository.area_id).displayName,
                note: reservationRepository.note,
                start_timestamp: reservationRepository.start_datetime,
                state: GetNextUserReservations.getState(reservationRepository)
            });

            const quantizerDTO: QuantizerDTO<ReservationDTO> = {
                total_count: 1,
                items: reservation
            };
            return await this.ok<QuantizerDTO<ReservationDTO>>(this.res, quantizerDTO);
        } catch (err) {
            return this.fail(err);
        }
    }

    private static getState(reservation: ReservationEntity): string {
        return reservation.cancelled ? 'Cancelled' :
            GetNextUserReservations.isFutureDate(reservation.start_datetime) ? 'Pending' :
                'Expired';
    }

    private static isFutureDate(date: number): boolean {
        return date * 1000 > new Date().getTime();
    }
}
