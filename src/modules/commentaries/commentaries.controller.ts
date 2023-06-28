import { Body, Controller, Param, Post, Get, Patch, Delete, Request, UseGuards } from "@nestjs/common";
import { CommentariesService } from "./commentaries.service";
import { JWTAuthGuard } from "../auth/jwt.auth.guard";
import { CreateCommentaryDto } from "./dto/create-commentary.dto";
import { UpdateCommentaryDto } from "./dto/update-commentary.dto";
import { HttpCode } from "@nestjs/common/decorators";

@Controller('commentaries')
export class CommentariesController {
    constructor(private readonly commentariesService: CommentariesService) { }

    @Post(":id")
    @UseGuards(JWTAuthGuard)
    create(@Param("id") carId: string, @Body() createCommentaryDto: CreateCommentaryDto, @Request() req) {
        return this.commentariesService.create(createCommentaryDto, req.user?.id, carId);
    }

    @Get("/car/:carId")
    findAll(@Param("carId") carId: string) {
        return this.commentariesService.findAll(carId);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.commentariesService.findOne(id);
    }

    @Patch(":id")
    @UseGuards(JWTAuthGuard)
    update(@Param("id") id: string, @Body() updateCommentaryDto: UpdateCommentaryDto, @Request() req) {
        return this.commentariesService.update(id, updateCommentaryDto, req.user?.id)
    }

    @HttpCode(204)
    @Delete(":id")
    @UseGuards(JWTAuthGuard)
    remove(@Param("id") id: string, @Request() req) {
        return this.commentariesService.remove(id, req.user?.id)
    }
}