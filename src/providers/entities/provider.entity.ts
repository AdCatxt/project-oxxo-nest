import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "src/products/entities/product.entity";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId: string;
    @Column('text')
    providerName: string;
    @Column('text', {
        unique: true
    })
    providerEmail: string;
    @Column({
        type: 'text',
        nullable: true
    })
    providerPhone: string;
    @OneToMany(() => Product, (product) => product.provider)
    products: Product[];
}
