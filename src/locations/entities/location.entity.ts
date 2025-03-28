import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Manager } from "../../managers/entities/manager.entity";
import { Region } from "../../regions/entities/region.entity";
import { Employee } from "../../employees/entities/employee.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;

    @ApiProperty({
        default: 'Oxxo de la Esquina'
    })
    @Column('text')
    locationName: string;

    @ApiProperty({
        default: 'Calle X, 53, 76232'
    })
    @Column('text')
    locationAdress: string;

    @ApiProperty({
        default: [127985, 823479]
    })
    @Column('simple-array')
    locationLatLng: number[];

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