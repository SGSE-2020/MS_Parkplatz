export interface ParkingAreaDTO {
    id: string;
    displayName: string;
    availableSpots: number;
    totalSpots: number;
    amenities: {
        food_drink: boolean;
        bar: boolean;
        fast_food: boolean;
        amenities: boolean;
        shopping: boolean;
        facilities: boolean;
        two_wheeler: boolean;
        hotel: boolean;
        grill: boolean;
        medical_aid: boolean;
        gas: boolean;
        charging: boolean;
    };
}
