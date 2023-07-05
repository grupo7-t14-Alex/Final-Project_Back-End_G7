
import {Injectable, BadRequestException} from "@nestjs/common";
import { AddressRepotiroy } from "../address.repositoty";
import { UpdateAddressDto } from "../../dto/update-address.dto";
import { Address } from "../../entities/address.entity";
import { PrismaService } from "src/dataBase/prisma.service";
import { plainToInstance } from "class-transformer";
@Injectable()
export class AddressPrismaRepository implements AddressRepotiroy {
    constructor(private prisma: PrismaService) {}
    
    async update(id: string, data: UpdateAddressDto, userId: string): Promise<Address> {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        })
        if(user.id !== userId ) {
            throw new BadRequestException('You dont have permission')
        }
        const address = await this.prisma.address.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Address, address)
    }
}