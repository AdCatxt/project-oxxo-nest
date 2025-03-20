import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Location } from "../../locations/entities/location.entity";
import { User } from "../../auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    employeeId: string;

    @ApiProperty({
        default:'Nombre(s)'
    })
    @Column('text')
    employeeName: string;

    @ApiProperty({
        default: 'Apellido(s)'
    })
    @Column('text')
    employeeLastName: string;

    @ApiProperty({
        default: '1278303823'
    })
    @Column('text')
    employeePhone: string;

    @ApiProperty({
        default: 'employee@email.com'
    })
    @Column('text', {
        unique: true
    })
    employeeEmail: string;

    @Column({
        type: 'text',
        nullable: true
    })
    employeePhoto: string;

    @ManyToOne(() => Location, (location) => location.employees)
    @JoinColumn({
        name: 'locationId'
    })
    location: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: 'userId'
    })
    user: User;
}