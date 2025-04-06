import { ApiProperty } from "@nestjs/swagger";
import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    
    @Column('text')
    locationName: string;


    @Column('text')
    locationAddress: string;

    
    @Column('simple-array')
    locationLatLng: number[];

    @ApiProperty({default: "1b1434ad-5e6c-4ee3-806d-74406d65c714"})
    @OneToOne(() => Manager, {
        eager: true,
    })
    @JoinColumn({
        name: "managerID",
    })
    manager: Manager | string;

    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({
        name: "regionID",
    })
    region: Region;

    @OneToMany(() => Employee, (employee) => employee.location)
    employees: Employee[];

}