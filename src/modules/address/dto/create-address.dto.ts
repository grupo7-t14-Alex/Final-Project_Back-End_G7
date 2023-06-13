import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    cep: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    street: string;

    @IsString()
    @IsNotEmpty()
    number: string;
    
    @IsString()
    @IsOptional()
    complements?: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
