import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
export declare class CoinsService {
    create(createCoinDto: CreateCoinDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCoinDto: UpdateCoinDto): string;
    remove(id: number): string;
}
