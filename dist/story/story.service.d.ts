import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
export declare class StoryService {
    private readonly httpService;
    private configService;
    private readonly logger;
    constructor(httpService: HttpService, configService: ConfigService);
    create(createStoryDto: CreateStoryDto): string;
    findAll(): Promise<string>;
    findOne(id: number): string;
    update(id: number, updateStoryDto: UpdateStoryDto): string;
    remove(id: number): string;
}
