import {Mapper} from "../Mapper";
import {ReservationEntity} from "../../models/entity/ReservationEntity";
import {ReservationDTO} from "../../models/dto/ReservationDTO";

export class ReservationMapper extends Mapper<ReservationEntity, ReservationDTO> {

    public toDTO(t: ReservationEntity): ReservationDTO {
        return undefined;
    }

    public toPersistence(u: ReservationDTO): ReservationEntity {
        return undefined;
    }
}

export const reservationMapper = new ReservationMapper();
