import { IsString } from "class-validator";

export class CreateGenderDto {

    @IsString()
    label: string;
    
    @IsString()
    slug: string;

}
