import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export enum Fuel {
  diesel = 'Diesel',
  ethanol = 'Etanol',
  gasoline = 'Gasolina',
  flex = 'Flex',
}

export class CreateCarDto {
  @ApiProperty({
    description: 'Marca do Carro',
    type: String,
    default: 'Fiat',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    description: 'Ano de Fabricação',
    type: String,
    default: '2020',
  })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({
    description: 'Cor do Carro',
    type: String,
    default: 'Vermelho',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'Quilometragem',
    type: String,
    default: '20.000',
  })
  @IsNumber()
  @IsNotEmpty()
  milage: number;

  @ApiProperty({
    description: 'Modelo',
    type: String,
    default: 'Argo 1.0 6v flex.',
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    description: 'Combustivel',
    type: String,
    default: 'Gasolina || Flex || Eletrico',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(Fuel)
  fuel: Fuel;

  @ApiProperty({
    description: 'Preço do carro',
    type: String,
    default: '250.000,00',
  })
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty({
    description: 'Proço da Fipe',
    type: String,
    default: '250.000,00',
  })
  @IsString()
  @IsNotEmpty()
  fipeTable: string;

  @ApiProperty({
    description: 'Dexcrição',
    type: String,
    default: 'Escreva algum comentario sobre o Carro',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Foto Capa do Carro',
    type: String,
    default: 'foto.png',
  })
  @IsString()
  @IsNotEmpty()
  coverPhoto: string;

  @ApiProperty({
    description: 'Fotos do Carro',
    type: String,
    default: '[foto1.png, foto2.png]',
  })
  @IsArray()
  @IsNotEmpty()
  gallery: string[];

  @ApiProperty({
    description: 'Escolha o tipo de conta',
    type: String,
    default: 'Vendedor || Cliente',
  })
  @IsBoolean()
  @IsNotEmpty()
  published: boolean;
}
