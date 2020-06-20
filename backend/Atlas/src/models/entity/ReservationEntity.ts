import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('reservation')
export class ReservationEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public user_id: string;

    @Column()
    public area_id: string;

    @Column()
    public start_datetime: number;

    @Column()
    public end_datetime: number;

    @Column()
    public cancelled: boolean;

    @Column()
    public note: string;
}
