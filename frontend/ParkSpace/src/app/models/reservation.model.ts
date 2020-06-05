export interface ReservationModel {
  start_timestamp: number;
  end_timestamp: number;
  spot_name: string;
  expired: boolean;
  state: string;
}
