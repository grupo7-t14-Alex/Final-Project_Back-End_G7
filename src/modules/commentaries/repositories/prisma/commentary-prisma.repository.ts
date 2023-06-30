import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CommentaryRepository } from "../commentary.repository";
import { PrismaService } from "src/dataBase/prisma.service";
import { CreateCommentaryDto } from "../../dto/create-commentary.dto";
import { Commentary } from "../../entities/commentary.entity";
import { UpdateCommentaryDto } from "../../dto/update-commentary.dto";

@Injectable()
export class CommentaryPrismaRepository implements CommentaryRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateCommentaryDto, userId: string, carId: string): Promise<Commentary> {
        const commentary = new Commentary()
        Object.assign(commentary, {
            ...data
        });

        const commentaries = await this.prisma.car.findFirst({
            where: { id: carId }
        })

        if(!commentaries) {
            throw new NotFoundException("Car not found!")
        }

        const newCommentary = await this.prisma.commentaries.create({
            data: { ...commentary, userId, carId }
        })

        return newCommentary;
    }

    async findAll(carId: string): Promise<Commentary[]> {
        const commentaries = await this.prisma.commentaries.findMany({
            where: { carId: carId },
            include: {
                user: {
                    select: {
                        name: true
                    }, 
                }
            }})

        return commentaries
    }

    async findOne(id: string): Promise<Commentary> {
        const commentary = await this.prisma.commentaries.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        name: true
                    }, 
                }
            }
        })

        if (!commentary) {
            throw new NotFoundException("Commentary not found!")
        }

        return commentary
    }

    async update(id: string, data: UpdateCommentaryDto, userId: string): Promise<Commentary> {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if (user.id !== userId) {
            throw new BadRequestException(`You don't have permission`)
        }

        const findCommentary = await this.prisma.commentaries.findFirst({
            where: {
                id: id
            }
        })

        if (!findCommentary) {
            throw new NotFoundException("Commentary not found!")
        }

        const commentary = await this.prisma.commentaries.update({
            where: { id },
            data: { ...data }
        })

        return commentary
    }

    async remove(id: string, userId: string): Promise<void> {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if (user.id !== userId) {
            throw new BadRequestException(`You don't have permission`)
        }

        const commentary = await this.prisma.commentaries.findFirst({
            where: {
                id: id
            }
        })

        if (!commentary) {
            throw new NotFoundException("Commentary not found!")
        }

        await this.prisma.commentaries.delete({ where: { id } })
    }
}