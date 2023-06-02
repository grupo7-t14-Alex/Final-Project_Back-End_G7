import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';
import { AddressesModule } from './modules/addresses/addresses.module';

@Module({
  imports: [AuthModule, CarsModule, UsersModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
