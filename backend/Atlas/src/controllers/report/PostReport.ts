import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {Messenger} from "../../services/amqp/Messenger";
import {ReportDTO} from "../../models/dto/ReportDTO";

export class PostReport extends BaseController {

    public initialize(httpServer: RestServer): void {
        httpServer.post('/reports', this.execute.bind(this));
    }

    public constructor() {
        super();
    }

    protected async executeImpl(): Promise<any> {
        try {
            // @ts-ignore
            const userUid = this.req.userUid;
            const reportDTO: ReportDTO = this.req.body;

            new Messenger().send('meldung',
                {
                    reservationId: reportDTO.reservationId,
                    areaId: reportDTO.areaId,
                    userNote: reportDTO.userNote,
                    userId: userUid
                })
            return await this.ok(this.res);
        } catch (err) {
            return this.fail(err);
        }
    }
}
