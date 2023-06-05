import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { Car } from '../../entities/car.entity';
import { PrismaService } from 'src/dataBase/prisma.service';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto, userId: string): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data
    });
    const newCar = await this.prisma.car.create({
      data: { ...car, userId}
    });
    return newCar;
  }

  findAll(): Car[] | Promise<Car[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Car | Promise<Car> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateCarDto): Car | Promise<Car> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
