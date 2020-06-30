export interface ReservationModel {
  reservation_id: string;
  start_timestamp: number;
  end_timestamp: number;
  area_name: string;
  area_id: string;
  expired: boolean;
  state: string;
  note: string;
}
