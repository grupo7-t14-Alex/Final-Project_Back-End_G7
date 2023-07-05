import { randomUUID } from 'crypto';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { MailService } from 'src/utils/mail.service';


@Injectable()
export class UsersService {

  constructor(
    private usersRepository: UsersRepository,
    private mailService: MailService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(createUserDto.email)
    if (findUser) {
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
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    return user
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new NotFoundException("User Not Found!")

    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto)
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    return user
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    await this.usersRepository.delete(id)
    return
  }

  async sendMailResetPassword(email: string) {
    const user = await this.usersRepository.findByEmail(email)
  
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    const resetToken = randomUUID()
    await this.usersRepository.updateToken(email, resetToken)

    const resetPassowrdTamplate = this.mailService.resetPasswordTamplate(email, user.name, resetToken)
    await this.mailService.sendmail(resetPassowrdTamplate)
  }

  async resetPassword(password: string, reset_token: string) {
    const user = await this.usersRepository.findByToken(reset_token)
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    await this.usersRepository.updatePassword(user.id, password)
  }
}
