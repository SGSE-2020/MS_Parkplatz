import {Service} from "../Service";
import {ParkingAreaEntity} from "../../models/entity/ParkingAreaEntity";

export interface IParkingAreaService extends Service<ParkingAreaEntity> {
    getAreaUtilization(areaId: string): Promise<[number, number]>;
    getAllParkingAreas(): Promise<[ParkingAreaEntity[], number]>;
}
