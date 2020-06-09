import {DatabaseProvider} from '../../database';
import {IReservationService} from "../interface/IReservationService";
import {ReservationEntity} from "../../models/entity/ReservationEntity";

export class ReservationService implements IReservationService {
    public async getAllReservationsForUserId(userId: string): Promise<[ReservationEntity[], number]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(ReservationEntity).findAndCount({
            where: {user_id: userId},
            order: {start_datetime: "DESC"}
        });
    }

    public async getReservationsById(reservationId: string): Promise<ReservationEntity> {
        const connection = await DatabaseProvider.getConnection();
        const condition = {where: {id: reservationId}}
        return await connection.getRepository(ReservationEntity).findOne(condition);
    }

    public async delete(t: ReservationEntity): Promise<any> {
        const connection = await DatabaseProvider.getConnection();
        return await connection
            .createQueryBuilder()
            .delete()
            .from(ReservationEntity)
            .where("id = :id", {id: t.id})
            .execute();
    }

    public async save(t: ReservationEntity): Promise<any> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(ReservationEntity).save(t);
    }
}

export const reservationService = new ReservationService();
