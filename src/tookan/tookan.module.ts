import { Module } from '@nestjs/common';
import { TookanService } from './tookan.service';
import { TookanController } from './tookan.controller';

@Module({
  controllers: [TookanController],
  providers: [TookanService]
})
export class TookanModule {}
