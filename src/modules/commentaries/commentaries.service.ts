import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { CommentaryRepository } from "./repositories/commentary.repository";
import { CreateCommentaryDto } from "./dto/create-commentary.dto";
import { UpdateCommentaryDto } from "./dto/update-commentary.dto";

@Injectable()
export class CommentariesService {
    constructor(private commentaryRepository: CommentaryRepository) { }

    async create(createCommentaryDto: CreateCommentaryDto, userId: string, carId: string) {
        const newCommentary = await this.commentaryRepository.create(createCommentaryDto, userId, carId);
        return newCommentary;
    }

    async findAll(carId: string) {
        const commentaries = await this.commentaryRepository.findAll(carId)
        return commentaries
    }

    async findOne(id: string) {
        const commentary = await this.commentaryRepository.findOne(id)
        if (!commentary) {
            throw new NotFoundException("Commentary not found!")
        }
        return commentary
    }

    async update(id: string, UpdateCommentaryDto: UpdateCommentaryDto, userId: string) {
        const updateCommentary = await this.commentaryRepository.update(id, UpdateCommentaryDto, userId)
        if(!updateCommentary) {
            throw new NotFoundException("Commentary not found!")
        }
        return updateCommentary
    }

    async remove(id: string, userId: string) {
        await this.commentaryRepository.remove(id, userId)
        return
    }
}