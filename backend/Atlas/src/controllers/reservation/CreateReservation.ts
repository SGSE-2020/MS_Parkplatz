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
            // @ts-ignore
            const userUid = this.req.userUid;
            const reservationDTO: ReservationDTO = this.req.body;
            const reservationEntity: ReservationEntity = {
                id: uuidv4(),
                area_id: reservationDTO.area_id,
                user_id: userUid,
                note: reservationDTO.note,
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
