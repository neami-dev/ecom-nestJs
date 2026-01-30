import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    // @Column()
    // slug: string;
    @OneToMany(() => Product, (product) => product.brand)
    products: Product[];

    @Column({ nullable: true })
    logo_url: string;
}
