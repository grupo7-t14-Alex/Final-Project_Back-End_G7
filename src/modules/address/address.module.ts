import { Module } from "@nestjs/common";
import { AddressService } from "./address.service";
import { AddressController } from "./address.controller";
import { PrismaService } from "src/dataBase/prisma.service";
import { AddressRepotiroy } from "./repositories/address.repositoty";
import { AddressPrismaRepository } from "./repositories/prisma/address-prisma.repository";

@Module({
  controllers: [AddressController],
  providers: [
    AddressService,
    PrismaService,
    {
      provide: AddressRepotiroy,
      useClass: AddressPrismaRepository
    }
  ]
})
export class AddressModule {}
