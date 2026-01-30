import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gender {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(() => Product, (product) => product.gender)
    products: Product[];

    @Column({ unique: true })
    slug: string;
}
