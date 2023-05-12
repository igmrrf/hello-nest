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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const twillio_1 = require("../containers/twillio/twillio");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.twilio = new twillio_1.default();
    }
    async signIn(username, pass) {
        const user = await this.usersService.findUser(username);
        if ((user === null || user === void 0 ? void 0 : user.password) !== pass) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { username: user.username, sub: user.userId };
        return { access_token: await this.jwtService.signAsync(payload) };
    }
    async requestOTP() {
        const response = await this.twilio.sendSMS();
        return response;
    }
    async sendCustomSMS() {
        const response = await this.twilio.sendCustomSMS('Hello There', '+2348164156256', '+2348137045484', 'https://picsum.photos/200');
        return response;
    }
    async verifyOTP(otp) {
        const response = await this.twilio.verifyPhone(otp);
        return response;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map