import { IsNumber, IsOptional, IsString, IsBoolean, IsDecimal } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateProductVariantDto {
    @IsNumber()
    productId: number;

    @IsNumber()
    colorId: number;

    @IsString()
    sizeId: string;

    @IsString()
    sku: string;

    @IsDecimal()
    price: number;

    @IsNumber()
    stock: number;

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;
}
