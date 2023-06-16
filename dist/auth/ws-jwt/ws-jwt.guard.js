"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WsJwtGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsJwtGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let WsJwtGuard = WsJwtGuard_1 = class WsJwtGuard {
    canActivate(context) {
        if (context.getType() !== 'ws') {
            return true;
        }
        const client = context.switchToWs().getClient();
        WsJwtGuard_1.validateToken(client);
        return true;
    }
    static async validateToken(client) {
        const { authorization } = client.handshake.headers;
        if (!authorization) {
            return client._error('unauthorized');
        }
        const token = authorization.split(' ')[1];
        const payload = await WsJwtGuard_1.jwtService.verifyAsync(token, {
            secret: WsJwtGuard_1.configService.get('JWT_SECRET'),
        });
        return payload;
    }
};
WsJwtGuard.jwtService = new jwt_1.JwtService();
WsJwtGuard.configService = new config_1.ConfigService();
WsJwtGuard = WsJwtGuard_1 = __decorate([
    (0, common_1.Injectable)()
], WsJwtGuard);
exports.WsJwtGuard = WsJwtGuard;
//# sourceMappingURL=ws-jwt.guard.js.map