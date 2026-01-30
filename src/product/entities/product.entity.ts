import { Brand } from "src/brand/entities/brand.entity";
import { Category } from "src/category/entities/category.entity";
import { Gender } from "src/gender/entities/gender.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ name: "category_id" })
    categoryId: number;

    @ManyToOne(() => Gender, (gender) => gender.products, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'gender_id' })
    gender: Gender;

    @ManyToOne(() => Brand, (brand) => brand.products, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'brand_id' })
    brand: Brand;

    @Column({ name: "is_published", default: false })
    isPublished: boolean;

    @ManyToOne(() => Category, (category) => category.products, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;

}
