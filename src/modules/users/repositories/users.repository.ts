import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";


export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User> | User;
    abstract findAll(): Promise<User> | User[];
    abstract findByEmail(email: string): Promise<User> | User;
    abstract findOne(id: string): Promise<User> | User;
    abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
    abstract delete(id: string): Promise<void> | void; 

    abstract updateToken(email: string, resetToken: string): Promise<void> | void;
    abstract updatePassword(id: string, password: string): Promise<void> | void;
    abstract findByToken(token: string): Promise<User> | User;
}

