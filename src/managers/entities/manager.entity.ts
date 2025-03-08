import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
