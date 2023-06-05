import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UsersPrismaRepository } from './repositories/Prisma.repository/users.prisma.repository';
import { UserInMemoryRepository } from './repositories/In-memory.repository/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
