import { IsNumber, IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateSizeDto {
    @IsString()
    name: string;

    @IsString()
    slug: string;

    @IsNumber()
    sortOrder: number;
}
