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
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  milage: number;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Fuel)
  fuel: Fuel;

  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  coverPhoto: string;

  @IsArray()
  @IsNotEmpty()
  gallery: string[];

  @IsBoolean()
  @IsNotEmpty()
  published: boolean;
}
