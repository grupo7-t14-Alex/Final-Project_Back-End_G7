import { BadRequestException, ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  
  constructor(private usersRepository: UsersRepository){}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(createUserDto.email)
    if(findUser){
      throw new ConflictException("User Already Exists")
    }
    const user = await this.usersRepository.create(createUserDto)
    return user
  }

  async findAll() {
    const users = await this.usersRepository.findAll()
    return users
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    return user
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email)
    if(!user){
      throw new BadRequestException("e-mail or password invalid!")
    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    return user
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne(id)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    await this.usersRepository.delete(id)
    return
  }
}
