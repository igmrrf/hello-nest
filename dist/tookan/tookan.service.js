"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TookanService = exports.TookanJobStatuses = exports.MetaData = exports.TookanErrorCodes = void 0;
const common_1 = require("@nestjs/common");
const tookan_api_1 = __importDefault(require("tookan-api"));
exports.TookanErrorCodes = {
    100: 'PARAMETER_MISSING',
    101: 'INVALID_KEY',
    200: 'ACTION_COMPLETE',
    201: 'SHOW_ERROR_MESSAGE',
    404: 'ERROR_IN_EXECUTION',
};
exports.MetaData = {
    timezone: -60,
    meta_data: [
        {
            label: 'barode_custom_field',
            data: [
                {
                    display_name: 'Barcode1',
                    data: 'data1',
                    is_verified: 0,
                },
                {
                    display_name: 'Barcode2',
                    data: 'data2',
                    is_verified: 1,
                },
            ],
        },
        {
            label: 'charge',
            data: '1000',
        },
        {
            label: 'PackageType',
            data: 'A,B,C',
        },
        {
            label: 'DeliveryDetails',
            data: [
                [
                    'car',
                    '123',
                    {
                        lat: '22.44',
                        lng: '34.4555',
                        add: 'srilanka',
                    },
                ],
                [
                    'bike',
                    '234',
                    {
                        lat: '22.44',
                        lng: '34.4555',
                        add: 'srilanka',
                    },
                ],
                [
                    'scooter',
                    '456',
                    {
                        lat: '22.44',
                        lng: '34.4555',
                        add: 'srilanka',
                    },
                ],
            ],
        },
    ],
    pickup_meta_data: '',
};
exports.TookanJobStatuses = {
    0: 'Assigned',
    1: 'Started',
    2: 'Successful',
    3: 'Failed',
    4: 'InProgress/Arrived',
    6: 'Unassigned',
    7: 'Accepted/Acknowledged',
    8: 'Declined',
    9: 'Canceled',
    10: 'Deleted',
};
const TookanAccessToken = process.env.TOOKAN_ACCESS_TOKENa;
const TookanApiKey = process.env.TOOKAN_API_KEY;
const Tookan = new tookan_api_1.default.Client({ api_key: TookanApiKey });
exports.default = Tookan;
let TookanService = class TookanService {
    create(createTookanDto) {
        return 'This action adds a new tookan';
    }
    findAll() {
        return `This action returns all tookan`;
    }
    findOne(id) {
        return `This action returns a #${id} tookan`;
    }
    update(id, updateTookanDto) {
        return `This action updates a #${id} tookan`;
    }
    remove(id) {
        return `This action removes a #${id} tookan`;
    }
};
TookanService = __decorate([
    (0, common_1.Injectable)()
], TookanService);
exports.TookanService = TookanService;
//# sourceMappingURL=tookan.service.js.map