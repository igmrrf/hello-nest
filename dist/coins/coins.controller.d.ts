import { CoinsService } from './coins.service';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
export declare class CoinsController {
    private readonly coinsService;
    constructor(coinsService: CoinsService);
    create(createCoinDto: CreateCoinDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCoinDto: UpdateCoinDto): string;
    remove(id: string): string;
}
