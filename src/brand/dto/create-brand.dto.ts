import { IsString } from "class-validator";

export class CreateBrandDto {
    @IsString()
    name: string;

    // @IsString()
    // slug: string;

    logo_url?: string;
}
