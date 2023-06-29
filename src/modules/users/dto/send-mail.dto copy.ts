import {
  IsString,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';


export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  to: string;

  @IsEmail()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
