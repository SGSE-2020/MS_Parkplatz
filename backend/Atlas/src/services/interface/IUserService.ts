import {Service} from "../Service";
import {ReservationEntity} from "../../models/entity/ReservationEntity";
import {ReservationDTO} from "../../models/dto/ReservationDTO";

export interface IUserService extends Service<ReservationEntity> {
    getInformation(reservationId: string): Promise<ReservationEntity>;
}
