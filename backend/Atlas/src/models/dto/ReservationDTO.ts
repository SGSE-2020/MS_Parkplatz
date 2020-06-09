export interface ReservationDTO {
    reservation_id: string,
    start_timestamp: number,
    end_timestamp: number,
    state: string,
    spot_id: string,
    spot_name: string,
    expired: boolean
}
