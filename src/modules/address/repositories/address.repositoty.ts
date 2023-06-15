import { Injectable } from "@nestjs/common"
import { UpdateAddressDto } from "../dto/update-address.dto";
import { Address } from "../entities/address.entity";

@Injectable()
export abstract class AddressRepotiroy {
    abstract update(id: string, data: UpdateAddressDto, userId:string): Promise<Address>
}