import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}
  async create(createCarDto: CreateCarDto, userId: string) {
    const newCar = await this.carsRepository.create(createCarDto, userId);
    return newCar;
  }

  async findAll() {
    const carsList = await this.carsRepository.findAll();
    return carsList;
  }

  async findOne(id: string) {
    const car = await this.carsRepository.findOne(id);
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const updatedCar = this.carsRepository.update(id, updateCarDto);
    return updatedCar;
  }

  async remove(id: string) {
    await this.carsRepository.remove(id);
    return;
  }
}
