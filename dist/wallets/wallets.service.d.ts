import { HttpService } from '@nestjs/axios';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletsService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    generatePrivateKey(): Promise<string>;
    createWallet(): Promise<string>;
    getEthBalance(address: string): Promise<string>;
    getTransactionHistory(address: string): Promise<string>;
    getTransactionForAccount(): Promise<string>;
    sendBTC(): Promise<string>;
    sendETH(): Promise<string>;
    getRate(): Promise<string>;
    findAll(): Promise<{
        hello: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateWalletDto: UpdateWalletDto): string;
    remove(id: number): string;
}
