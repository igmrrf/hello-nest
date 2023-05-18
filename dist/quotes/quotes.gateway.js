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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const ws_jwt_guard_1 = require("../auth/ws-jwt/ws-jwt.guard");
const ws_mw_1 = require("../auth/ws-jwt/ws.mw");
const create_quote_dto_1 = require("./dto/create-quote.dto");
const update_quote_dto_1 = require("./dto/update-quote.dto");
const quotes_service_1 = require("./quotes.service");
let QuotesGateway = class QuotesGateway {
    constructor(quotesService) {
        this.quotesService = quotesService;
    }
    afterInit(client) {
        client.use((0, ws_mw_1.SocketAuthMiddleware)());
    }
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id);
        });
        console.log('connected');
    }
    sendMessage(data) {
        const message = {
            id: 1,
            quote: 'new quote created',
            message: 'New Message from',
        };
        console.log({ message });
        this.server.emit('onCreateQuote', message);
    }
    message() {
        throw new websockets_1.WsException('Invalid Data');
        this.server.close();
    }
    create(createQuoteDto) {
        let current = 0;
        this.server.emit('onRandom', {
            quote: 'new quote created',
            message: 'New Message from',
        });
        const interval = setInterval(() => {
            this.server.emit('onCreateQuote', {
                id: 1,
                quote: 'new quote created',
                message: 'New Message from',
            });
            if (current >= 2) {
                clearInterval(interval);
            }
            current += 1;
        }, 1000);
        return this.quotesService.create(createQuoteDto);
    }
    findAll() {
        return this.quotesService.findAll();
    }
    findOne(id) {
        return this.quotesService.findOne(id);
    }
    update(updateQuoteDto) {
        return this.quotesService.update(updateQuoteDto.id, updateQuoteDto);
    }
    remove(id) {
        return this.quotesService.remove(id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], QuotesGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "sendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "message", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('createQuote'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quote_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllQuotes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneQuote'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateQuote'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_quote_dto_1.UpdateQuoteDto]),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeQuote'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QuotesGateway.prototype, "remove", null);
QuotesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(4001),
    (0, common_1.UseGuards)(ws_jwt_guard_1.WsJwtGuard),
    __metadata("design:paramtypes", [quotes_service_1.QuotesService])
], QuotesGateway);
exports.QuotesGateway = QuotesGateway;
//# sourceMappingURL=quotes.gateway.js.map