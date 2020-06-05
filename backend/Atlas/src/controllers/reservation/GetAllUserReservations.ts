import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";
import {QuantizerDTO} from "../../models/dto/QuantizerDTO";
import {ReservationDTO} from "../../models/dto/ReservationDTO";
import {ReservationEntity} from "../../models/entity/ReservationEntity";

export class GetAllUserReservations extends BaseController {
    private reservationService: ReservationService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/reservations', this.execute.bind(this));
    }

    public constructor(reservationService: any) {
        super();
        this.reservationService = reservationService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            //TODO communicate with Bürgerbüro to get the userId
            let reservationRepository = await this.reservationService.getAllReservationsForUserId('1');

            let reservations: ReservationDTO[] = [];
            reservationRepository[0].forEach(x => reservations.push({
                end_timestamp: x.end_datetime,
                expired: !GetAllUserReservations.isFutureDate(x.end_datetime),
                reservation_id: x.id,
                spot_id: x.spot_id,
                spot_name: 'Spot Name',
                start_timestamp: x.start_datetime,
                state: GetAllUserReservations.getState(x)
            }))

            const quantizerDTO: QuantizerDTO = {
                total_count: reservationRepository[1],
                items: reservations
            };
            return await this.ok<QuantizerDTO>(this.res, quantizerDTO);
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
