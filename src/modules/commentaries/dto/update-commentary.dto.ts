import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCommentaryDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string;
}

