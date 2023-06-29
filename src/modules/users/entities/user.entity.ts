import { randomUUID } from 'node:crypto';
import * as moment from 'moment';
import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  cpf: string;

  phone: string;

  birthdate: string;

  description: string;

  seller: boolean;

  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}
