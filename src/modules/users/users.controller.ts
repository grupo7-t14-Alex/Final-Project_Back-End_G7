import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Users')

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  @ApiBearerAuth()
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':id')
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @HttpCode(200)
  @Post('resetpass')
  async sendEmailResetPassowrd(@Body('email') email: string){
    await this.usersService.sendMailResetPassword(email)
    return {message: 'Token Send!!'}
  }

  @HttpCode(200)
  @Patch('resetpass/:token')
  async resetPassword(@Param('token') token: string, @Body('password') password: string){
    await this.usersService.resetPassword(password, token)
    return {message: 'Passowrd Cheange Whith Sucess!!'}
  }
}
