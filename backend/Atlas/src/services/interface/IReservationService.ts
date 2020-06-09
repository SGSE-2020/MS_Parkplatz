import {Service} from "../Service";
import {ReservationEntity} from "../../models/entity/ReservationEntity";

export interface IReservationService extends Service<ReservationEntity> {
    getAllReservationsForUserId(userId: string): Promise<[ReservationEntity[], number]>;
}
