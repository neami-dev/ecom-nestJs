import { Collection } from "src/collection/entities/collection.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product_collections' })
export class ProductCollection {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "product_id" })
    productId: number;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ name: "collection_id" })
    collectionId: string;

    @ManyToOne(() => Collection, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'collection_id' })
    collection: Collection;
}
