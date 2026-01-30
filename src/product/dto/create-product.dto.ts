import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateProductDto {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    genderId: number;

    @IsNumber()
    brandId: number;

    @IsOptional()
    @IsBoolean()
    isPublished?: boolean;

    
}
