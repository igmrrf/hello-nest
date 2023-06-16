import { Test, TestingModule } from '@nestjs/testing';
import { TookanController } from './tookan.controller';
import { TookanService } from './tookan.service';

describe('TookanController', () => {
  let controller: TookanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TookanController],
      providers: [TookanService],
    }).compile();

    controller = module.get<TookanController>(TookanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
