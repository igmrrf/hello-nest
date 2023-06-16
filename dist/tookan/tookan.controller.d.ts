import { TookanService } from './tookan.service';
import { CreateTookanDto } from './dto/create-tookan.dto';
import { UpdateTookanDto } from './dto/update-tookan.dto';
export declare class TookanController {
    private readonly tookanService;
    constructor(tookanService: TookanService);
    create(createTookanDto: CreateTookanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTookanDto: UpdateTookanDto): string;
    remove(id: string): string;
}
