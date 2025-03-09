import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Location } from '../../locations/entities/location.entity';
import { User } from '../../auth/entities/user.entity';

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;
    @Column()
    managerFullName: string;
    @Column('float')
    managerSalary: number;
    @Column()
    managerEmail: string;
    @Column()
    managerPhone: string;

    @OneToOne(() => Location)
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
