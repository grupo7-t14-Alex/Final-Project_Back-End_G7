import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Cars')

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Post()
  @UseGuards(JWTAuthGuard)
  create(@Body() createCarDto: CreateCarDto, @Request() req) {
    return this.carsService.create(createCarDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
