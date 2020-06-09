export interface BookingModel {
  area_id: string;
  date_of_reservation: string;
  end_of_reservation: string;
  number_of_spots: number;
  insurance: boolean;
  cleaning: boolean;
  chauffeur: boolean;
  consentTerms: boolean;
  consentPayment: boolean;
}
