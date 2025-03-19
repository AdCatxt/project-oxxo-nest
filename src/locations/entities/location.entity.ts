import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity";
import { Region } from "../../regions/entities/region.entity";
import { Employee } from "../../employees/entities/employee.entity";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAdress: string;
    @Column('simple-array')
    locationLating: number[];

    @OneToOne(() => Manager, {
        eager: true
    })
    @JoinColumn({
        name: 'managerId'
    })
    manager: Manager;

    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({
        name: 'regionId'
    })
    region: Region;

    @OneToMany(() => Employee, (employee) => employee.location)
    employees: Employee[];
}