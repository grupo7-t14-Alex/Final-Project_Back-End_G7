import { randomUUID } from 'crypto';

export enum Fuel {
  diesel = 'Diesel',
  ethanol = 'Etanol',
  gasoline = 'Gasolina',
  flex = 'Flex',
}

export class Car {
  readonly id: string;
  readonly createdAt: string;
  brand: string;
  color: string;
  milage: string;
  model: string;
  fuel: Fuel;
  price: number;
  description: string;
  coverImg: string;
  galery: [];
  published: boolean;

  constructor() {
    this.id = randomUUID();
    this.createdAt = Car.createDate();
  }

  static createDate(): string {
    const date = Date.now();
    const now = new Date(date);
    return now.toDateString();
  }
}
