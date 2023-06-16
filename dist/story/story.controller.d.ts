import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { StoryService } from './story.service';
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    create(createStoryDto: CreateStoryDto): string;
    findAll(): Promise<string>;
    findOne(id: string): string;
    update(id: string, updateStoryDto: UpdateStoryDto): string;
    remove(id: string): string;
}
