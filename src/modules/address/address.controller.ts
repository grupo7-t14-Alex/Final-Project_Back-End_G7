import { Controller,Body, Patch, Param, UseGuards, Request } from "@nestjs/common";
import { AddressService } from "./address.service";

import { UpdateAddressDto } from "./dto/update-address.dto";
import { JWTAuthGuard } from "../auth/jwt.auth.guard";

@Controller("address")
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  
  @Patch(":id")
  @UseGuards(JWTAuthGuard)
  update(@Param("id") addressID: string, @Body() updateAddressDto: UpdateAddressDto, @Request() req) {
    const userId = req.user.id
    console.log(userId)
    return this.addressService.update(addressID, updateAddressDto,userId);
  }

  
}
