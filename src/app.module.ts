import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [AuthModule, CarsModule, UsersModule, AddressModule],
})
export class AppModule {}
