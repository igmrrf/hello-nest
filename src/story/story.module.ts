import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
