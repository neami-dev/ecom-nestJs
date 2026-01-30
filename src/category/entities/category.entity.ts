import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column({ unique: true })
    slug : string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

    @Column({name:"parent_id", nullable: true })
    parentId : number;

}
