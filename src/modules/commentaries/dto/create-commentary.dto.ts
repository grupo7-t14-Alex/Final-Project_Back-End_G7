import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCommentaryDto {
    @IsString()
    @IsNotEmpty()
    description: string;
}

