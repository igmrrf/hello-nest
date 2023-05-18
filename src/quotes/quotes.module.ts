import { Module } from '@nestjs/common';
import { QuotesGateway } from './quotes.gateway';
import { QuotesService } from './quotes.service';

@Module({
  exports: [QuotesGateway],
  providers: [QuotesGateway, QuotesService],
})
export class QuotesModule {}
