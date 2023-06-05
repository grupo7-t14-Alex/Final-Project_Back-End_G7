import { randomUUID } from 'crypto';
import * as moment from 'moment';

export class Car {
  readonly id: string;

  readonly createdAt: string;

  brand: string;

  year: number;

  color: string;

  milage: string;

  model: string;

  fuel: string;

  price: number;

  description: string;

  coverPhoto: string;

  galery: [];

  published: boolean;

  userId?: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}
