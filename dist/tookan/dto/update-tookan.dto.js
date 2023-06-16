"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTookanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tookan_dto_1 = require("./create-tookan.dto");
class UpdateTookanDto extends (0, mapped_types_1.PartialType)(create_tookan_dto_1.CreateTookanDto) {
}
exports.UpdateTookanDto = UpdateTookanDto;
//# sourceMappingURL=update-tookan.dto.js.map