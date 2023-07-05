import { Injectable } from "@nestjs/common"
import { CreateCommentaryDto } from "../dto/create-commentary.dto";
import { Commentary } from "../entities/commentary.entity";
import { UpdateCommentaryDto } from "../dto/update-commentary.dto";

@Injectable()
export abstract class CommentaryRepository {
    abstract create(data: CreateCommentaryDto, userId: string, carId: string): Promise<Commentary>
    abstract findAll(carId: string): Promise<Commentary[]>
    abstract findOne(id: string): Promise<Commentary>
    abstract update(id: string, data: UpdateCommentaryDto, userId: string): Promise<Commentary>
    abstract remove(id: string, userId:string): Promise<void>
}