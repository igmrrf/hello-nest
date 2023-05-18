import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletService } from './wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    create(createWalletDto: CreateWalletDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWalletDto: UpdateWalletDto): string;
    remove(id: string): string;
}
