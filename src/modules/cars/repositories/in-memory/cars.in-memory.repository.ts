import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { Car } from '../../entities/car.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CarsInMemoryRepository extends CarsRepository {
  private database = [];
  create(data: CreateCarDto): Car | Promise<Car> {
    const newCar = new Car();
    Object.assign(newCar, {
      ...data,
    });

    this.database.push(newCar);

    return plainToInstance(Car, newCar);
  }
  findAll(): Car[] | Promise<Car[]> {
    return plainToInstance(Car, this.database);
  }
  findOne(id: string): Car | Promise<Car> {
    const car = this.database.find((car) => car.id === id);
    return plainToInstance(Car, car);
  }
  update(id: string, data: UpdateCarDto): Car | Promise<Car> {
    const carIndex = this.database.findIndex((car) => car.id === id);
    this.database[carIndex] = {
      ...this.database[carIndex],
      ...data,
    };

    return plainToInstance(Car, this.database[carIndex]);
  }
  remove(id: string): void | Promise<void> {
    const carIndex = this.database.findIndex((car) => car.id === id);
    this.database.splice(carIndex, 1);
  }
}
