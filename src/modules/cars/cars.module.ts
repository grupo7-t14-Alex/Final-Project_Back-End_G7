import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from 'src/dataBase/prisma.service';
import { CarsRepository } from './repositories/cars.repository';
import { CarsInMemoryRepository } from './repositories/in-memory/cars.in-memory.repository';
import { CarsPrismaRepository } from './repositories/prisma/cars.prisma.repository';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    PrismaService,
    {
      provide: CarsRepository,
      useClass: CarsPrismaRepository,
    },
  ],
})
export class CarsModule {}
