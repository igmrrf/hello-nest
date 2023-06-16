import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export type User = {
    userId: number;
    username: string;
    password: string;
};
export declare class UsersService {
    private readonly users;
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): Promise<User>;
    findUser(username: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
