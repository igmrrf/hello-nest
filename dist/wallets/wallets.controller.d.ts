import { QuotesGateway } from 'src/quotes/quotes.gateway';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsService } from './wallets.service';
export declare class WalletsController {
    private readonly walletsService;
    private quoteGateway;
    constructor(walletsService: WalletsService, quoteGateway: QuotesGateway);
    create(createWalletDto: CreateWalletDto): Promise<{
        tantum: import("@tatumio/tatum").Rate;
        coinapi: any;
    }>;
    findAll(): {
        hello: string;
    }[];
    findOne(id: string): {
        ethMnemonic: {
            xpub: string;
            mnemonic: string;
        };
        btcMnemonic: {
            mnemonic: string;
            xpub: string;
        };
        ethPrivateKey: string;
        btcPrivateKey: string;
        btcAccount: {
            currency: string;
            active: boolean;
            balance: {
                accountBalance: string;
                availableBalance: string;
            };
            frozen: boolean;
            xpub: string;
            customerId: string;
            accountingCurrency: string;
            id: string;
        };
        ethAccount: {
            currency: string;
            active: boolean;
            balance: {
                accountBalance: string;
                availableBalance: string;
            };
            frozen: boolean;
            xpub: string;
            customerId: string;
            accountingCurrency: string;
            id: string;
        };
        btcAddress: {
            xpub: string;
            derivationKey: number;
            address: string;
            currency: string;
        };
        ethAddress: {
            xpub: string;
            derivationKey: number;
            address: string;
            currency: string;
        };
    };
    update(id: string, updateWalletDto: UpdateWalletDto): string;
    remove(id: string): string;
}
