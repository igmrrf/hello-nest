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
var StoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let StoryService = StoryService_1 = class StoryService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.logger = new common_1.Logger(StoryService_1.name);
    }
    create(createStoryDto) {
        this.logger.log(createStoryDto);
        return 'This action adds a new story';
    }
    async findAll() {
        const dbUser = this.configService.get('MYSQL_USERNAME');
        const mongoHost = this.configService.get('mongo.host');
        const redisPort = this.configService.get('redis.port', 6379);
        this.logger.log(dbUser);
        this.logger.log(redisPort);
        this.logger.log(mongoHost);
        return 'data';
    }
    findOne(id) {
        return `This action returns a #${id} story`;
    }
    update(id, updateStoryDto) {
        this.logger.log(updateStoryDto);
        return `This action updates a #${id} story`;
    }
    remove(id) {
        return `This action removes a #${id} story`;
    }
};
StoryService = StoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map