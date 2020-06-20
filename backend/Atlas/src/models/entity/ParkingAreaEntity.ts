import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('area')
export class ParkingAreaEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public displayName: string;

    @Column()
    public totalSpots: number;

    @Column()
    public food_drink: boolean;

    @Column()
    public bar: boolean;

    @Column()
    public fast_food: boolean;

    @Column()
    public amenities: boolean;

    @Column()
    public shopping: boolean;

    @Column()
    public facilities: boolean;

    @Column()
    public two_wheeler: boolean;

    @Column()
    public hotel: boolean;

    @Column()
    public grill: boolean;

    @Column()
    public medical_aid: boolean;

    @Column()
    public gas: boolean;

    @Column()
    public charging: boolean;
}
