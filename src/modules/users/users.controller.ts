import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';

@ApiTags('Users')

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
