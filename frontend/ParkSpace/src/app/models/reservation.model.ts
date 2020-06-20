export interface ReservationModel {
  start_timestamp: number;
  end_timestamp: number;
  area_name: string;
  expired: boolean;
  state: string;
}
