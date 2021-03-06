import {Mapper} from "../Mapper";
import {ParkingAreaEntity} from "../../models/entity/ParkingAreaEntity";
import {ParkingAreaDTO} from "../../models/dto/ParkingAreaDTO";

export class ParkingAreaMapper extends Mapper<ParkingAreaEntity, ParkingAreaDTO> {

    toDTO(t: ParkingAreaEntity): ParkingAreaDTO {
        return {
            amenities: {
                amenities: t.amenities,
                bar: t.bar,
                charging: t.charging,
                facilities: t.facilities,
                fast_food: t.fast_food,
                food_drink: t.food_drink,
                gas: t.gas,
                grill: t.grill,
                hotel: t.hotel,
                medical_aid: t.medical_aid,
                shopping: t.shopping,
                two_wheeler: t.two_wheeler
            },
            availableSpots: ParkingAreaMapper.randomIntFromInterval(1, t.totalSpots),
            displayName: t.displayName,
            id: t.id,
            totalSpots: t.totalSpots
        };
    }

    toPersistence(u: ParkingAreaDTO): ParkingAreaEntity {
        return undefined;
    }

    private static randomIntFromInterval(min, max) {
        return Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
    }
}

export const parkingAreaMapper = new ParkingAreaMapper();
