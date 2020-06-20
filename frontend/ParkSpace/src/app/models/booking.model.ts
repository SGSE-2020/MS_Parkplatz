export interface BookingModel {
  area_id: string;
  start_timestamp: number;
  end_timestamp: number;
  number_of_spots: number;
  insurance: boolean;
  cleaning: boolean;
  chauffeur: boolean;
  consentTerms: boolean;
  consentPayment: boolean;
  note: string;
}
