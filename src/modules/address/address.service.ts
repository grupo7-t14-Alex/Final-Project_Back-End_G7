import { Injectable, NotAcceptableException } from "@nestjs/common";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { AddressRepotiroy } from "./repositories/address.repositoty";

@Injectable()
export class AddressService {
  
  constructor(private addressRepository: AddressRepotiroy) {}

  async update(id: string, updateAddressDto: UpdateAddressDto, userId: string) {
    const address = await this.addressRepository.update(id, updateAddressDto, userId)

    if(!address) {
      throw new NotAcceptableException("Address not found!")
    }
    return address
  }

  
}
