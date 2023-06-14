import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);
    if (user) {
      const matchPass = await compare(userPassword, user.password);
      if (matchPass) {
        return { email: user.email };
      }
    }
    return null;
  }
  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    // console.log(user)
    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
      userId: user.id,
    };
  }
}
