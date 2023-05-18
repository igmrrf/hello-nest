import { HttpService } from '@nestjs/axios';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletsService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    generatePrivateKey(generatePrivateKeyDto: {
        currency: string;
        mnemonic: string;
        index: number;
        testnet: boolean;
    }): Promise<string>;
    generatePrivateKey2(): Promise<string>;
    createWallet(createWalletDto: CreateWalletDto): Promise<{
        ethMnemonic: {
            mnemonic: string;
        } | {
            address: string;
            privateKey: string;
        } | {
            address: string;
            secret: string;
        } | {
            address: any;
            secret: any;
        };
        btcMnemonic: {
            mnemonic: string;
        } | {
            address: string;
            privateKey: string;
        } | {
            address: string;
            secret: string;
        } | {
            address: any;
            secret: any;
        };
        ethPrivateKey: string;
        btcPrivateKey: string;
        btcAccount: import("@tatumio/tatum").Account;
        ethAccount: import("@tatumio/tatum").Account;
        btcAddress: import("@tatumio/tatum").Address;
        ethAddress: import("@tatumio/tatum").Address;
    }>;
    getEthBalance(address: string): Promise<import("bignumber.js").BigNumber>;
    getBalance(): Promise<{
        balance2: import("@tatumio/tatum").AccountBalance;
        btcBalance: {
            incoming: string;
            outgoing: string;
        };
        balance1: import("@tatumio/tatum").AccountBalance;
        ethBalance: import("bignumber.js").BigNumber;
    }>;
    getTransactionHistory(address: string): Promise<number>;
    getTransactionForAccount(): Promise<{
        transactions: import("@tatumio/tatum").Transaction[];
        ethTransactions: import("@tatumio/tatum").Transaction[];
        btcTransactions: import("@tatumio/tatum").Transaction[];
    }>;
    sendBTC(): Promise<import("@tatumio/tatum").TransactionHash>;
    sendETH(): Promise<import("@tatumio/tatum").TransactionHash>;
    getRate(): Promise<import("@tatumio/tatum").Rate>;
    getBMRate(): Promise<any>;
    create(createWalletDto: CreateWalletDto): Promise<{
        tantum: import("@tatumio/tatum").Rate;
        coinapi: any;
    }>;
    findAll(): {
        hello: string;
    }[];
    findOne(id: number): {
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
    update(id: number, updateWalletDto: UpdateWalletDto): string;
    remove(id: number): string;
}
