import { Test, TestingModule } from '@nestjs/testing';
import { QuotesGateway } from './quotes.gateway';
import { QuotesService } from './quotes.service';

describe('QuotesGateway', () => {
  let gateway: QuotesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotesGateway, QuotesService],
    }).compile();

    gateway = module.get<QuotesGateway>(QuotesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
