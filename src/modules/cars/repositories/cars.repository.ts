import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
  abstract create(data: CreateCarDto): Promise<Car> | Car;
  abstract findAll(): Promise<Car[]> | Car[];
  abstract findOne(id: string): Promise<Car | undefined> | Car;
  abstract update(
    id: string,
    data: UpdateCarDto,
  ): Promise<Car | undefined> | Car;
  abstract remove(id: string): Promise<void> | void;
}
