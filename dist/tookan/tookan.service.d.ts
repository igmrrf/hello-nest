import { CreateTookanDto } from './dto/create-tookan.dto';
import { UpdateTookanDto } from './dto/update-tookan.dto';
export declare const TookanErrorCodes: {
    100: string;
    101: string;
    200: string;
    201: string;
    404: string;
};
export declare const MetaData: {
    timezone: number;
    meta_data: ({
        label: string;
        data: {
            display_name: string;
            data: string;
            is_verified: number;
        }[];
    } | {
        label: string;
        data: string;
    } | {
        label: string;
        data: (string | {
            lat: string;
            lng: string;
            add: string;
        })[][];
    })[];
    pickup_meta_data: string;
};
export declare const TookanJobStatuses: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
};
declare const Tookan: any;
export default Tookan;
export declare class TookanService {
    create(createTookanDto: CreateTookanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTookanDto: UpdateTookanDto): string;
    remove(id: number): string;
}
