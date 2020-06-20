import {DatabaseProvider} from '../../database';
import {IParkingAreaService} from "../interface/IParkingAreaService";
import {ParkingAreaEntity} from "../../models/entity/ParkingAreaEntity";

export class ParkingAreaService implements IParkingAreaService {

    public async getAllParkingAreas(): Promise<[ParkingAreaEntity[], number]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(ParkingAreaEntity).findAndCount();
    }

    getAreaUtilization(areaId: string): Promise<[number, number]> {
        return Promise.resolve([0, 0]);
    }

    getFreeSpotId(areaId: string): Promise<string> {
        return Promise.resolve("");
    }

    delete(t: ParkingAreaEntity): Promise<any> {
        // not implemented
        return Promise.resolve("not implemented");
    }

    save(t: ParkingAreaEntity): Promise<any> {
        // not implemented
        return Promise.resolve("not implemented");
    }
}

export const parkingAreaService = new ParkingAreaService();
