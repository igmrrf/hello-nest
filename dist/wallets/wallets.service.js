"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WalletsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const tatum_1 = require("@tatumio/tatum");
const rxjs_1 = require("rxjs");
let WalletsService = WalletsService_1 = class WalletsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(WalletsService_1.name);
    }
    async generatePrivateKey(generatePrivateKeyDto) {
        const { currency, mnemonic, index, testnet } = generatePrivateKeyDto;
        const privateKey = await (0, tatum_1.generatePrivateKeyFromMnemonic)(tatum_1.Currency[currency], testnet, mnemonic, index);
        return privateKey;
    }
    async generatePrivateKey2() {
        const privateKey = await (0, tatum_1.generatePrivateKeyFromMnemonic)(tatum_1.Currency.ETH, true, 'debris lecture decorate globe upper coast jaguar feed horse baby crystal comic license grit space wonder october flat jazz false fatal debate huge image', 1);
        return privateKey;
    }
    async createWallet(createWalletDto) {
        const { externalId = 'email@smartx.com', currency } = createWalletDto;
        const btcMnemonic = await (0, tatum_1.generateWallet)(tatum_1.Currency.BTC, true);
        const ethMnemonic = await (0, tatum_1.generateWallet)(tatum_1.Currency.ETH, true);
        const ethPrivateKey = await (0, tatum_1.generatePrivateKeyFromMnemonic)(tatum_1.Currency.ETH, true, ethMnemonic['mnemonic'], Math.ceil(Math.random() * 100));
        const btcPrivateKey = await (0, tatum_1.generatePrivateKeyFromMnemonic)(tatum_1.Currency.BTC, true, btcMnemonic['mnemonic'], Math.ceil(Math.random() * 100));
        const btcAccount = await (0, tatum_1.createAccount)({
            currency: tatum_1.Currency.BTC,
            xpub: btcMnemonic['xpub'],
            accountingCurrency: tatum_1.Fiat[currency],
            customer: { externalId },
        });
        const ethAccount = await (0, tatum_1.createAccount)({
            currency: tatum_1.Currency.ETH,
            xpub: ethMnemonic['xpub'],
            accountingCurrency: tatum_1.Fiat[currency],
            customer: { externalId },
        });
        const btcAddress = await (0, tatum_1.generateDepositAddress)(btcAccount.id);
        const ethAddress = await (0, tatum_1.generateDepositAddress)(ethAccount.id);
        const walletDetails = {
            ethMnemonic,
            btcMnemonic,
            ethPrivateKey,
            btcPrivateKey,
            btcAccount,
            ethAccount,
            btcAddress,
            ethAddress,
        };
        return walletDetails;
    }
    async getEthBalance(address) {
        const balance = await (0, tatum_1.ethGetAccountBalance)(address);
        return balance;
    }
    async getBalance() {
        const balance1 = await (0, tatum_1.getAccountBalance)('645f66844bd0c4ecdeb43924');
        const ethBalance = await (0, tatum_1.ethGetAccountBalance)('0xd89bf8324002d783567ee39844fce07620092647');
        const balance2 = await (0, tatum_1.getAccountBalance)('645f66846745e63542add7ca');
        const btcBalance = await (0, tatum_1.btcGetBalance)('tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp');
        const result = { balance2, btcBalance, balance1, ethBalance };
        this.logger.log(result);
        return result;
    }
    async getTransactionHistory(address) {
        const history = await (0, tatum_1.ethGetTransactionsCount)(address);
        return history;
    }
    async getTransactionForAccount() {
        const trans = {
            ethTransactions: [
                {
                    amount: '0.001',
                    operationType: 'DEPOSIT',
                    currency: 'ETH',
                    transactionType: 'CREDIT_DEPOSIT',
                    accountId: '645f66844bd0c4ecdeb43924',
                    anonymous: false,
                    reference: '42ebc083-8b68-4a3c-bbc0-1477d2dfda8a',
                    txId: '0x4132d34b039a5f12672f633d803d6441c3e7987aa5b28e22c2405bf66194e38c',
                    address: '0xd89bf8324002d783567ee39844fce07620092647',
                    marketValue: {
                        currency: 'USD',
                        source: 'CoinGecko',
                        sourceDate: 1684011262224,
                        amount: '1.79893027447000000927684016',
                    },
                    created: 1684011323177,
                    location: 'DE-HE',
                },
                {
                    amount: '0.5',
                    operationType: 'DEPOSIT',
                    currency: 'ETH',
                    transactionType: 'CREDIT_DEPOSIT',
                    accountId: '645f66844bd0c4ecdeb43924',
                    anonymous: false,
                    reference: '97a4372f-e99a-45d6-882f-bd0cd8ed3da5',
                    txId: '0xb1f6b1e946b4b144d2fe6554d3db43d6ee2c3ed8e288a5b8b4d7b21cefb152bc',
                    address: '0xd89bf8324002d783567ee39844fce07620092647',
                    marketValue: {
                        currency: 'USD',
                        source: 'CoinGecko',
                        sourceDate: 1684011088954,
                        amount: '899.18617564999999558769195923',
                    },
                    created: 1684011128645,
                    location: 'DE-HE',
                },
            ],
            btcTransactions: [
                {
                    amount: '0.00001',
                    operationType: 'DEPOSIT',
                    currency: 'BTC',
                    transactionType: 'CREDIT_DEPOSIT',
                    accountId: '645f66846745e63542add7ca',
                    anonymous: false,
                    reference: 'c200ac56-b8f1-4a40-a7ec-3b6020e19d73',
                    txId: 'd8c53dae47f0793b524da66001c67fe0a47b8fdeee021eff84b622c31bb19133',
                    address: 'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp',
                    marketValue: {
                        currency: 'USD',
                        source: 'CoinGecko',
                        sourceDate: 1683975340402,
                        amount: '0.2684048034500000072201822',
                    },
                    created: 1683975462645,
                    location: 'DE-HE',
                },
                {
                    amount: '0.00001',
                    operationType: 'DEPOSIT',
                    currency: 'BTC',
                    transactionType: 'CREDIT_DEPOSIT',
                    accountId: '645f66846745e63542add7ca',
                    anonymous: false,
                    reference: '13af901c-c2d1-43e0-a9c5-7b3e86c8437a',
                    txId: '1cd36491d042d5213ce3d73debffa4d49a6668a8f843376c06f67231537e308f',
                    address: 'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp',
                    marketValue: {
                        currency: 'USD',
                        source: 'CoinGecko',
                        sourceDate: 1683975340402,
                        amount: '0.2684048034500000072201822',
                    },
                    created: 1683975460955,
                    location: 'DE-HE',
                },
            ],
        };
        const transactions = await (0, tatum_1.getTransactionsByCustomer)({
            id: '645f66846745e63542add7cb',
        });
        const ethTransactions = await (0, tatum_1.getTransactionsByAccount)({
            id: '645f66844bd0c4ecdeb43924',
        });
        const btcTransactions = await (0, tatum_1.getTransactionsByAccount)({
            id: '645f66846745e63542add7ca',
        });
        return { transactions, ethTransactions, btcTransactions };
    }
    async sendBTC() {
        const body = {
            fromAddress: [
                {
                    address: 'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp',
                    privateKey: 'cTgmUbrfiercoF1wtjyscAAD6EY5TYouAZZQDWGJ1fMjBwtRzzbH',
                },
            ],
            to: [
                {
                    address: 'tb1qw2c3lxufxqe2x9s4rdzh65tpf4d7fssjgh8nv6',
                    value: 0.00001,
                },
            ],
        };
        const send = await (0, tatum_1.sendBitcoinTransaction)(true, body);
        return send;
    }
    async sendETH() {
        const body = {
            to: '0x59197b574e904F1B8b3C945806D253957565dB8A',
            amount: '0.1',
            currency: tatum_1.Currency.ETH,
            fromPrivateKey: '0x0a01beabd01618927a5883eb702fdcaf89a2d4b77c331285d1e044cba50cd0f9',
        };
        const send = await (0, tatum_1.sendEthOrErc20Transaction)(body);
        return send;
    }
    async getRate() {
        const exchange = await (0, tatum_1.getExchangeRate)(tatum_1.Currency.BTC, tatum_1.Fiat.NGN);
        return exchange;
    }
    async getBMRate() {
        const coinApiApiKey = 'A38D9B49-A2EA-49D5-A5C2-FDF007C180A4';
        const coin = 'BTC';
        const currency = 'NGN';
        const url = 'https://rest-sandbox.coinapi.io/';
        const func = 'exchangerate';
        console.log({ url, func });
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService
            .get(`https://rest.coinapi.io/v1/exchangerate/${coin}/${currency}`, {
            headers: { 'X-CoinAPI-Key': coinApiApiKey },
        })
            .pipe((0, rxjs_1.catchError)((error) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
        })));
        return data;
    }
    async create(createWalletDto) {
        this.logger.log({ createWalletDto });
        const tantum = await this.getRate();
        const coinapi = await this.getBMRate();
        return { tantum, coinapi };
    }
    findAll() {
        const addresses = [{ hello: 'world' }];
        return addresses;
    }
    findOne(id) {
        this.logger.log({ id });
        const wallet = {
            ethMnemonic: {
                xpub: 'xpub6DdpwVckpqxiGefcee3ZWQyehR63UV6hDnoYNPZbuTNSbL7PjSGbf91qAtu7bkijJjFyywWXVFgQzgG7VbkJhAW8V5hBjPNZFBjMeMgvnSo',
                mnemonic: 'debris lecture decorate globe upper coast jaguar feed horse baby crystal comic license grit space wonder october flat jazz false fatal debate huge image',
            },
            btcMnemonic: {
                mnemonic: 'spray extra ocean elegant glow riot divorce atom game truth chat run reason turn flat indicate mandate horn transfer lift punch task negative dice',
                xpub: 'tpubDFTgTP96LTEw2eKBkSJxYs9MzsVZfE5fphrtQWRc7niL1F8hgg8kfWfsRY9qpVCF67pcWv3jR8pEbtzebJzKVxNChchzUNBFHox2x1Ka1it',
            },
            ethPrivateKey: '0x0a01beabd01618927a5883eb702fdcaf89a2d4b77c331285d1e044cba50cd0f9',
            btcPrivateKey: 'cTgmUbrfiercoF1wtjyscAAD6EY5TYouAZZQDWGJ1fMjBwtRzzbH',
            btcAccount: {
                currency: 'BTC',
                active: true,
                balance: { accountBalance: '0', availableBalance: '0' },
                frozen: false,
                xpub: 'tpubDFTgTP96LTEw2eKBkSJxYs9MzsVZfE5fphrtQWRc7niL1F8hgg8kfWfsRY9qpVCF67pcWv3jR8pEbtzebJzKVxNChchzUNBFHox2x1Ka1it',
                customerId: '645f66846745e63542add7cb',
                accountingCurrency: 'USD',
                id: '645f66846745e63542add7ca',
            },
            ethAccount: {
                currency: 'ETH',
                active: true,
                balance: { accountBalance: '0', availableBalance: '0' },
                frozen: false,
                xpub: 'xpub6DdpwVckpqxiGefcee3ZWQyehR63UV6hDnoYNPZbuTNSbL7PjSGbf91qAtu7bkijJjFyywWXVFgQzgG7VbkJhAW8V5hBjPNZFBjMeMgvnSo',
                customerId: '645f66846745e63542add7cb',
                accountingCurrency: 'USD',
                id: '645f66844bd0c4ecdeb43924',
            },
            btcAddress: {
                xpub: 'tpubDFTgTP96LTEw2eKBkSJxYs9MzsVZfE5fphrtQWRc7niL1F8hgg8kfWfsRY9qpVCF67pcWv3jR8pEbtzebJzKVxNChchzUNBFHox2x1Ka1it',
                derivationKey: 1,
                address: 'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp',
                currency: 'BTC',
            },
            ethAddress: {
                xpub: 'xpub6DdpwVckpqxiGefcee3ZWQyehR63UV6hDnoYNPZbuTNSbL7PjSGbf91qAtu7bkijJjFyywWXVFgQzgG7VbkJhAW8V5hBjPNZFBjMeMgvnSo',
                derivationKey: 1,
                address: '0xd89bf8324002d783567ee39844fce07620092647',
                currency: 'ETH',
            },
        };
        return wallet;
    }
    update(id, updateWalletDto) {
        this.logger.log({ updateWalletDto });
        return `This action updates a #${id} wallet`;
    }
    remove(id) {
        return `This action removes a #${id} wallet`;
    }
};
WalletsService = WalletsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WalletsService);
exports.WalletsService = WalletsService;
//# sourceMappingURL=wallets.service.js.map