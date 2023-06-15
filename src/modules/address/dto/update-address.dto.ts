import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateAddressDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    cep: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    state: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    city: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    street: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    number: string;
    
    @IsString()
    @IsOptional()
    @IsOptional()
    complements?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    userId: string;
}
