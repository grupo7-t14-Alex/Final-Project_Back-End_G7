import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { Car } from '../../entities/car.entity';
import { PrismaService } from 'src/dataBase/prisma.service';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCarDto, userId: string): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data,
    });
    const newCar = await this.prisma.car.create({
      data: { ...car, userId },
    });
    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({
      include: {
        user: {
          select: {
            name: true
          }
        },
      }
    });

    return cars;
  }
  async findOne(id: string): Promise<Car> {
    const car = await this.prisma.car.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true
          }
        },
        commentaries: {
          select: {
            description: true,
            createdAt: true,
            user: {
              select: {
                name: true
              }
            }
          }
        },
      }
    });
    return car;
  }
  async update(id: string, data: UpdateCarDto): Promise<Car> {
    const car = await this.prisma.car.update({
      where: { id },
      data: { ...data },
    });

    return car;
  }
  async remove(id: string): Promise<void> {
    await this.prisma.car.delete({
      where: { id },
    });
  }
}
