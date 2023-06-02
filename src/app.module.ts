import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';
import { AddressesModule } from './modules/addresses/addresses.module';

@Module({
  imports: [AuthModule, CarsModule, UsersModule, AddressesModule],
})
export class AppModule {}
