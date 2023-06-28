import { Module } from "@nestjs/common";
import { CommentariesController } from "./commentaries.controller";
import { CommentariesService } from "./commentaries.service";
import { PrismaService } from "src/dataBase/prisma.service";
import { CommentaryRepository } from "./repositories/commentary.repository";
import { CommentaryPrismaRepository } from "./repositories/prisma/commentary-prisma.repository";

@Module({
    controllers: [CommentariesController],
    providers: [
        CommentariesService,
        PrismaService,
        {
            provide: CommentaryRepository,
            useClass: CommentaryPrismaRepository
        }
    ]
})
export class CommentariesModule{}