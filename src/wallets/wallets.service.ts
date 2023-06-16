import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import {
  // generateAdaWallet,
  // generateAlgoWallet,
  // generateBchWallet,
  // generateBnbWallet,
  // generateBscWallet,
  // generateBtcWallet,
  // generateCeloWallet,
  // generateDogeWallet,
  // generateEgldWallet,
  // generateFlowWallet,
  // generateKlaytnWallet,
  // generateLtcWallet,
  // generatePolygonWallet,
  // generateVetWallet,
  // generateXlmWallet,
  Currency,
  Fiat,
  btcGetBalance,
  createAccount,
  ethGetAccountBalance,
  ethGetTransactionsCount,
  generateDepositAddress,
  generateDepositAddresses,
  generatePrivateKeyFromMnemonic,
  generateWallet,
  getAccountBalance,
  getExchangeRate,
  getTransactionsByAccount,
  getTransactionsByCustomer,
  sendBitcoinTransaction,
  sendEthOrErc20Transaction,
} from '@tatumio/tatum';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  private readonly logger = new Logger(WalletsService.name);
  constructor(private readonly httpService: HttpService) {}

  async generatePrivateKey(generatePrivateKeyDto: {
    currency: string;
    mnemonic: string;
    index: number;
    testnet: boolean;
  }) {
    const { currency, mnemonic, index, testnet } = generatePrivateKeyDto;
    const privateKey = await generatePrivateKeyFromMnemonic(
      Currency[currency],
      testnet,
      mnemonic,
      index,
    );

    return privateKey;
  }

  async generatePrivateKey2() {
    const privateKey = await generatePrivateKeyFromMnemonic(
      Currency.ETH,
      true,
      'debris lecture decorate globe upper coast jaguar feed horse baby crystal comic license grit space wonder october flat jazz false fatal debate huge image',
      1,
    );

    return privateKey;
  }

  async createWallet(createWalletDto: CreateWalletDto) {
    const { externalId = 'email@smartx.com', currency } = createWalletDto;
    const btcMnemonic = await generateWallet(Currency.BTC, true);
    const ethMnemonic = await generateWallet(Currency.ETH, true);

    const ethPrivateKey = await generatePrivateKeyFromMnemonic(
      Currency.ETH,
      true,
      ethMnemonic['mnemonic'],
      Math.ceil(Math.random() * 100),
    );
    const btcPrivateKey = await generatePrivateKeyFromMnemonic(
      Currency.BTC,
      true,
      btcMnemonic['mnemonic'],
      Math.ceil(Math.random() * 100),
    );
    const btcAccount = await createAccount({
      currency: Currency.BTC,
      xpub: btcMnemonic['xpub'],
      accountingCurrency: Fiat[currency],
      customer: { externalId },
    });

    const ethAccount = await createAccount({
      currency: Currency.ETH,
      xpub: ethMnemonic['xpub'],
      accountingCurrency: Fiat[currency],
      customer: { externalId },
    });

    const btcAddress = await generateDepositAddress(btcAccount.id);
    const ethAddress = await generateDepositAddress(ethAccount.id);
    sendBitcoinTransaction();
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

  async getEthBalance(address: string) {
    const balance = await ethGetAccountBalance(address);
    return balance;
  }

  async getBalance() {
    const balance1 = await getAccountBalance('645f66844bd0c4ecdeb43924');
    const ethBalance = await ethGetAccountBalance(
      '0xd89bf8324002d783567ee39844fce07620092647',
    );
    balance;
    const balance2 = await getAccountBalance('645f66846745e63542add7ca');
    const btcBalance = await btcGetBalance(
      'tb1qlxugvj7a3k8avrptzmdlke8ptqu78nrzm5v4pp',
    );
    const result = { balance2, btcBalance, balance1, ethBalance };
    this.logger.log(result);
    return result;
  }

  async getTransactionHistory(address: string) {
    const history = await ethGetTransactionsCount(address);
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
    const transactions = await getTransactionsByCustomer({
      id: '645f66846745e63542add7cb',
    });

    const ethTransactions = await getTransactionsByAccount({
      id: '645f66844bd0c4ecdeb43924',
    });
    const btcTransactions = await getTransactionsByAccount({
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

    const send = await sendBitcoinTransaction(true, body);

    return send;
  }

  async sendETH() {
    const body = {
      to: '0x59197b574e904F1B8b3C945806D253957565dB8A',
      amount: '0.1',
      currency: Currency.ETH,
      fromPrivateKey:
        '0x0a01beabd01618927a5883eb702fdcaf89a2d4b77c331285d1e044cba50cd0f9',
    };

    const send = await sendEthOrErc20Transaction(body);

    return send;
  }

  async getRate() {
    const exchange = await getExchangeRate(Currency.BTC, Fiat.NGN);
    return exchange;
  }

  async getBMRate() {
    const coinApiApiKey = 'A38D9B49-A2EA-49D5-A5C2-FDF007C180A4';
    const coin = 'BTC';
    const currency = 'NGN';
    const url = 'https://rest-sandbox.coinapi.io/';
    const func = 'exchangerate';

    console.log({ url, func });

    // !Always check for http response code to be 200 else it's a failed call
    //     Error Code	Meaning
    // 400	Bad Request -- There is something wrong with your request
    // 401	Unauthorized -- Your API key is wrong
    // 403	Forbidden -- Your API key doesn't have enough privileges to access this resource
    // 429	Too many requests -- You have exceeded your API key rate limits
    // 550	No data -- You requested specific single item that we don't have at this moment.

    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://rest.coinapi.io/v1/exchangerate/${coin}/${currency}`, {
          headers: { 'X-CoinAPI-Key': coinApiApiKey },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data;
  }

  async create(createWalletDto: CreateWalletDto) {
    this.logger.log({ createWalletDto });

    const tantum = await this.getRate();
    const coinapi = await this.getBMRate();

    return { tantum, coinapi };
  }

  findAll() {
    const addresses = [{ hello: 'world' }];

    return addresses;
  }

  findOne(id: number) {
    this.logger.log({ id });

    const wallet = {
      ethMnemonic: {
        xpub: 'xpub6DdpwVckpqxiGefcee3ZWQyehR63UV6hDnoYNPZbuTNSbL7PjSGbf91qAtu7bkijJjFyywWXVFgQzgG7VbkJhAW8V5hBjPNZFBjMeMgvnSo',
        mnemonic:
          'debris lecture decorate globe upper coast jaguar feed horse baby crystal comic license grit space wonder october flat jazz false fatal debate huge image',
      },
      btcMnemonic: {
        mnemonic:
          'spray extra ocean elegant glow riot divorce atom game truth chat run reason turn flat indicate mandate horn transfer lift punch task negative dice',
        xpub: 'tpubDFTgTP96LTEw2eKBkSJxYs9MzsVZfE5fphrtQWRc7niL1F8hgg8kfWfsRY9qpVCF67pcWv3jR8pEbtzebJzKVxNChchzUNBFHox2x1Ka1it',
      },
      ethPrivateKey:
        '0x0a01beabd01618927a5883eb702fdcaf89a2d4b77c331285d1e044cba50cd0f9',
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

  update(id: number, updateWalletDto: UpdateWalletDto) {
    this.logger.log({ updateWalletDto });
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
