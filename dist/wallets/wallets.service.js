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
const js_1 = require("@tatumcom/js");
console.log({ JS: js_1.TatumSDK });
let WalletsService = WalletsService_1 = class WalletsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(WalletsService_1.name);
    }
    async generatePrivateKey() {
        const privateKey = '';
        return privateKey;
    }
    async createWallet() {
        const walletDetails = '';
        return walletDetails;
    }
    async getEthBalance(address) {
        const walletDetails = '';
        return walletDetails;
    }
    async getTransactionHistory(address) {
        const walletDetails = '';
        return walletDetails;
    }
    async getTransactionForAccount() {
        const walletDetails = '';
        return walletDetails;
    }
    async sendBTC() {
        const walletDetails = '';
        return walletDetails;
    }
    async sendETH() {
        const walletDetails = '';
        return walletDetails;
    }
    async getRate() {
        const walletDetails = '';
        return walletDetails;
    }
    async findAll() {
        const addresses = [{ hello: 'world' }];
        const tatumJs = await js_1.TatumSDK.init({
            network: js_1.Network.BITCOIN_TESTNET,
        });
        const rawTrans = await tatumJs.rpc.createRawTransaction([
            {
                txid: 'id',
                vout: 0,
                sequence: 0,
            },
        ], [
            {
                'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp': '0.012',
            },
            {
                data: 'hex',
            },
        ]);
        console.log({ rawTrans });
        return addresses;
    }
    findOne(id) {
        return '';
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