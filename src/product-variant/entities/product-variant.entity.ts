import { Product } from "src/product/entities/product.entity";
import { Color } from "src/color/entities/color.entity";
import { Size } from "src/size/entities/size.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductVariant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "product_id" })
    productId: number;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ name: "color_id" })
    colorId: number;

    @ManyToOne(() => Color, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'color_id' })
    color: Color;

    @Column({ name: "size_id" })
    sizeId: string;

    @ManyToOne(() => Size, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'size_id' })
    size: Size;

    @Column()
    sku: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ default: 0 })
    stock: number;

    @Column({ name: "is_available", default: true })
    isAvailable: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;

}
