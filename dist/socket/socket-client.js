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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClient = void 0;
const common_1 = require("@nestjs/common");
const socket_io_client_1 = require("socket.io-client");
const websocket_1 = __importDefault(require("websocket"));
const ws_1 = __importDefault(require("ws"));
let SocketClient = class SocketClient {
    constructor() {
        this.socketClient = (0, socket_io_client_1.io)('wss://ws-sandbox.coinapi.io/v1/');
        this.ws = new ws_1.default('wss://ws-sandbox.coinapi.io/v1/');
        const WebSocketClient = websocket_1.default.client;
        this.client = new WebSocketClient();
    }
    onModuleInit() {
        this.registerConsumerEvents();
    }
    async registerConsumerEvents() {
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway');
        });
        this.socketClient.on('onCreateQuote', (payload) => {
            console.log(payload);
        });
        await this.socketClient.connect();
        this.socketClient.connected;
    }
    connectWithWS() {
        this.ws.on('error', console.error);
        this.ws.on('open', () => {
            console.log('Connection Opened');
            this.ws.send('{"type": "hello", "apikey": "A38D9B49-A2EA-49D5-A5C2-FDF007C180A4","heartbeat": false,"subscribe_data_type": ["quote"],"subscribe_filter_asset_id": ["BTC", "ETH"]}');
        });
        this.ws.on('message', function message(data) {
            console.log('received: %s', data);
        });
    }
    connectWSS() {
        this.client.on('connectFailed', function (error) {
            console.log('Connect Error: ' + error.toString());
        });
        this.client.on('connect', (connection) => {
            console.log('WebSocket Client Connected');
            connection.on('error', function (error) {
                console.log('Connection Error: ' + error.toString());
            });
            connection.on('close', function () {
                console.log('echo-protocol Connection Closed');
            });
            connection.on('message', function (message) {
                if (message.type === 'utf8') {
                    console.log("Received: '" + message.utf8Data + "'");
                }
            });
            console.log({ emit: this.client.emit });
            connection.send('{"type": "hello", "apikey": "A38D9B49-A2EA-49D5-A5C2-FDF007C180A4","heartbeat": false,"subscribe_data_type": ["quote"],"subscribe_filter_asset_id": ["BTC", "ETH"]}');
        });
        this.client.connect('wss://ws-sandbox.coinapi.io/v1/');
    }
};
SocketClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SocketClient);
exports.SocketClient = SocketClient;
//# sourceMappingURL=socket-client.js.map