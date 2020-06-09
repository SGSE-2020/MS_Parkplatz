import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";

export class DeleteReservations extends BaseController {
    private reservationService: ReservationService;

    public initialize(httpServer: RestServer): void {
        httpServer.delete('/reservations/:id', this.execute.bind(this));
    }

    public constructor(reservationService: any) {
        super();
        this.reservationService = reservationService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            const reservationId = this.req.params.id;
            const reservation = await this.reservationService.getReservationsById(reservationId);
            await this.reservationService.delete(reservation);
            return await this.ok(this.res);
        } catch (err) {
            return this.fail(err);
        }
    }
}
