export interface ReservationDTO {
    reservation_id: string,
    start_timestamp: number,
    end_timestamp: number,
    state: string,
    area_id: string,
    area_name: string
    expired: boolean
    note: string;
}
