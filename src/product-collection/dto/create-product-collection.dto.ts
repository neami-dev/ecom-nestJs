import { IsNumber, IsString } from "class-validator";

export class CreateProductCollectionDto {
    @IsNumber()
    productId: number;

    @IsString()
    collectionId: string;
}
