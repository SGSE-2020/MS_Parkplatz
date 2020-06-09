import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('spot')
export class SpotEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public area_id: string;

    @Column()
    public name: string;
}
