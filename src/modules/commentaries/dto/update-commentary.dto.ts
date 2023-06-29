import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCommentaryDto {
    @ApiProperty({
        description: 'Escreva um comentario',
        type: String,
        default: 'Seu comentario Aqui',
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string;
}

