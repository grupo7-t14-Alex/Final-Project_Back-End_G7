import { randomUUID } from 'crypto';
import * as moment from 'moment';
import { FuelType } from '@prisma/client';

export class Car {
  readonly id: string;

  readonly createdAt: string;

  brand: string;

  year: number;

  color: string;

  milage: number;

  model: string;

  fuel: FuelType;

  price: string;

  description: string;

  coverPhoto: string;

  gallery: string[];

  published: boolean;

  userId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}
