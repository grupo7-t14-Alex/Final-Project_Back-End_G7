import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength, IsOptional, IsBoolean } from "class-validator";
import { hashSync } from 'bcryptjs'
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty({
        description: 'Nome do Usuario',
        type: String,
        default: 'Teste da Silva'
    })
    @IsString()
    @IsOptional()
    @MinLength(5)
    @MaxLength(50)
    name: string;

    @ApiProperty({
        description: 'Email do Usuario',
        type: String,
        default: 'teste.silva@mail.com'
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(50)
    email: string;

    @ApiProperty({
        description: 'Senha do Usuario',
        type: String,
        default: '12345678'
    })
    @IsString()
    @IsOptional()
    @MinLength(8)
    @Transform(({value}: {value: string}) => hashSync(value, 10), {
        groups: ['transform']
    })
    password: string;

    @ApiProperty({
        description: 'Cpf do Usuario',
        type: String,
        default: '99900099900099'
    })
    @IsString()
    @IsOptional()
    @MinLength(11)
    @MaxLength(11)
    cpf: string;

    @ApiProperty({
        description: 'Telefone do Usuario',
        type: String,
        default: '55 99999 9999'
    })
    @IsString()
    @IsOptional()
    @MinLength(11)
    telefone: string;

    @ApiProperty({
        description: 'data de nescimento do usuario',
        type: String,
        default: '10/10/2010'
    })
    @IsString()
    @IsOptional()
    dateOfBirth: string;

    @ApiProperty({
        description: 'descrição',
        type: String,
        default: 'texto'
    })
    @IsString()
    @IsOptional()
    @MaxLength(250)
    description: string;

    @ApiProperty({
        description: 'Define se o usuario é vendedor ou não',
        type: Boolean,
        default: 'False'
    })
    @IsBoolean()
    @IsOptional()
    @MaxLength(250)
    seller: boolean;
}
