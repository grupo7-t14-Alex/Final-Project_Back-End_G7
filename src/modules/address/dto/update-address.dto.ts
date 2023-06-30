import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateAddressDto {
    @ApiProperty({
        description: 'Seu Cep',
        type: String,
        default: '98300-000',
    })
    @IsString()
    @IsNotEmpty()
    cep: string;

    @ApiProperty({
        description: 'Seu Estado',
        type: String,
        default: 'SP',
    })
    @IsString()
    @IsNotEmpty()
    state: string;

    @ApiProperty({
        description: 'Sua Cidade',
        type: String,
        default: 'São Paulo',
    })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        description: 'Sua Rua',
        type: String,
        default: 'Av. Paulista',
    })
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({
        description: 'Numero',
        type: String,
        default: '258',
    })
    @IsString()
    @IsNotEmpty()
    number: string;
    
    @ApiProperty({
        description: 'Complemento',
        type: String,
        default: 'AP 401',
    })
    @IsString()
    @IsOptional()
    complements?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    userId: string;
}
