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

    public async getAreaById(areaId: string): Promise<ParkingAreaEntity> {
        const connection = await DatabaseProvider.getConnection();
        const condition = {where: {id: areaId}}
        return await connection.getRepository(ParkingAreaEntity).findOne(condition);
    }

    public async delete(t: ParkingAreaEntity): Promise<any> {
        const connection = await DatabaseProvider.getConnection();
        return await connection
            .createQueryBuilder()
            .delete()
            .from(ParkingAreaEntity)
            .where("id = :id", {id: t.id})
            .execute();
    }

    public async save(t: ParkingAreaEntity): Promise<any> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(ParkingAreaEntity).save(t);
    }
}

export const parkingAreaService = new ParkingAreaService();
