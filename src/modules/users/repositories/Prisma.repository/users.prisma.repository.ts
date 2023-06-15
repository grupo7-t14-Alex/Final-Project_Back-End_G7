import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../users.repository";
import { CreateUserDto } from "../../dto/create-user.dto";
import { UpdateUserDto } from "../../dto/update-user.dto";
import { User } from "../../entities/user.entity";
import { PrismaService } from "src/dataBase/prisma.service";
import { plainToInstance } from "class-transformer";
import { NotFoundException } from "@nestjs/common/exceptions"
import { Address } from "src/modules/address/entities/address.entity";

@Injectable()
export class UsersPrismaRepository implements UsersRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDto): Promise<User> {
        const user = new User()
        const addr = new Address()

        const {address, ...userData} = data
        Object.assign(user, {
            ...userData
        })

        const newUser = await this.prisma.user.create({
            data: {...user}
        })

        if(!newUser) {
            throw new NotFoundException("user not found")
        }

        Object.assign(addr, {
            cep: address.cep,
            state: address.state,
            city: address.city,
            street: address.street,
            number: address.number,
            complements: address.complements || null,
            userId: newUser.id
        })
        
        const addressCreate = await this.prisma.address.create({
            data:{
                ...addr,
                userId:newUser.id
            },
        })

        const userAddress = {
            ...newUser,
            address: addressCreate
        }

        return plainToInstance(User, userAddress)
    }

    async findAll(): Promise<any> {
        const users = await this.prisma.user.findMany({ 
            include: {
                cars: true
            }
        })
        return plainToInstance(User, users)
    }

    async findOne(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {id},
            include: {
                cars: true
            }
        })
        return plainToInstance(User, user)
    }

    async findByEmail(email: string): Promise<any> {
        const user = await this.prisma.user.findUnique({
                where: {email}
            })
        return user
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: {id},
            data: {...data}
        })
        return plainToInstance(User, user)
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: {id}
        })
    }
    
}   