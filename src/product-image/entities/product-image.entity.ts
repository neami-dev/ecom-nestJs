import { Product } from "src/product/entities/product.entity";
import { ProductVariant } from "src/product-variant/entities/product-variant.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product_images' })
export class ProductImage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'product_id' })
    productId: number;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ name: 'variant_id', nullable: true })
    variantId: number;

    @ManyToOne(() => ProductVariant, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'variant_id' })
    variant: ProductVariant;

    @Column()
    url: string;

    @Column({ name: 'sort_order', default: 0 })
    sortOrder: number;

    @Column({ name: 'is_primary', default: false })
    isPrimary: boolean;
}
