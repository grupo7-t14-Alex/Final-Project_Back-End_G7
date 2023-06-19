import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UsersPrismaRepository } from './repositories/Prisma.repository/users.prisma.repository';
import { UserInMemoryRepository } from './repositories/In-memory.repository/users.in-memory.repository';
import { MailerModule } from '@nestjs-modules/mailer'
import { MailService } from 'src/utils/mail.service';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      },
      defaults: {
        from: 'guiles.mello@gmail.com'
      }
    })
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    MailService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
