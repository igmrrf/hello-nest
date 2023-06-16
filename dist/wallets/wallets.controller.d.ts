import { QuotesGateway } from 'src/quotes/quotes.gateway';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsService } from './wallets.service';
export declare class WalletsController {
    private readonly walletsService;
    private quoteGateway;
    constructor(walletsService: WalletsService, quoteGateway: QuotesGateway);
    create(createWalletDto: CreateWalletDto): Promise<string>;
    findAll(): Promise<{
        hello: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateWalletDto: UpdateWalletDto): string;
    remove(id: string): string;
}
