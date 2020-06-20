import {Service} from "../Service";
import {ParkingAreaEntity} from "../../models/entity/ParkingAreaEntity";

export interface IParkingAreaService extends Service<ParkingAreaEntity> {
    getAreaUtilization(areaId: string): Promise<[number, number]>;
    getFreeSpotId(areaId: string): Promise<string>;
    getAllParkingAreas(): Promise<[ParkingAreaEntity[], number]>;
}
