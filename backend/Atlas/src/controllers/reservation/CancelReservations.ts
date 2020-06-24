import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {ReservationService} from "../../services/implementation/ReservationService";
import {Messenger} from "../../services/amqp/Messenger";

export class CancelReservations extends BaseController {
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
            // @ts-ignore
            const userUid = this.req.userUid;
            const reservationId = this.req.params.id;
            await this.reservationService.cancelReservation(reservationId);
            new Messenger().send('storniert', {id: reservationId, userId: userUid})
            return await this.ok(this.res);
        } catch (err) {
            return this.fail(err);
        }
    }
}
