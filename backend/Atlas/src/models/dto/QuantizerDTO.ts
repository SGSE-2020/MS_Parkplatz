import {ReservationDTO} from "./ReservationDTO";

export interface QuantizerDTO {
    total_count: number;
    items: ReservationDTO[];
}
