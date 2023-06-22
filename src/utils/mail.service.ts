import { MailerService } from '@nestjs-modules/mailer'
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendEmailDto } from 'src/modules/users/dto/send-mail.dto copy';

import * as Mailgen from 'mailgen'

const mailGenerator = new Mailgen ({
    theme: 'default',
    product: {
        name: 'Motor Shop',
        link: 'http://localhost:3001'
    }
})


@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendmail ({to, subject, text}: SendEmailDto) {
        await this.mailerService
        .sendMail({
            to,
            subject,
            html: text
        })
        .catch((err) => {
            console.log(err)
            throw new InternalServerErrorException('Erro ao enviar o Email')
        })
    }

    resetPasswordTamplate(userEmail: string, userName: string, resetToken: string) {
        const email = {
            body: {
                name: userName,
                intro: 'Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.',
                action: {
                    instructions: 'Click no botão abaixo para redefinir sua senha:',
                    button: {
                        color: '#4529E6',
                        text: 'Redefinir Senha',
                        link: `http://localhost:3001/resetpassword/${resetToken}`,
                    },
                },
                outro: 'Se você não solicitou uma redefinição de senha, por favor ignore este e-mail',
            },
        };

        const emailBody = mailGenerator.generate(email)

        const emailTamplate = {
            to: userEmail,
            subject: "Reset Passoword",
            text: emailBody,
        }
        return emailTamplate
    }
}