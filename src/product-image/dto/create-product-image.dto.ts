import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductImageDto {
    @IsNumber()
    productId: number;

    @IsOptional()
    @IsNumber()
    variantId?: number;

    @IsString()
    url: string;

    @IsOptional()
    @IsNumber()
    sortOrder?: number;

    @IsOptional()
    @IsBoolean()
    isPrimary?: boolean;
}
