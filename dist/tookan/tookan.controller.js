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
exports.TookanController = void 0;
const common_1 = require("@nestjs/common");
const tookan_service_1 = require("./tookan.service");
const create_tookan_dto_1 = require("./dto/create-tookan.dto");
const update_tookan_dto_1 = require("./dto/update-tookan.dto");
let TookanController = class TookanController {
    constructor(tookanService) {
        this.tookanService = tookanService;
    }
    create(createTookanDto) {
        return this.tookanService.create(createTookanDto);
    }
    findAll() {
        return this.tookanService.findAll();
    }
    findOne(id) {
        return this.tookanService.findOne(+id);
    }
    update(id, updateTookanDto) {
        return this.tookanService.update(+id, updateTookanDto);
    }
    remove(id) {
        return this.tookanService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tookan_dto_1.CreateTookanDto]),
    __metadata("design:returntype", void 0)
], TookanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TookanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TookanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tookan_dto_1.UpdateTookanDto]),
    __metadata("design:returntype", void 0)
], TookanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TookanController.prototype, "remove", null);
TookanController = __decorate([
    (0, common_1.Controller)('tookan'),
    __metadata("design:paramtypes", [tookan_service_1.TookanService])
], TookanController);
exports.TookanController = TookanController;
//# sourceMappingURL=tookan.controller.js.map