import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SkipAuth } from 'src/auth/auth.guard';
import { QuotesGateway } from 'src/quotes/quotes.gateway';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(
    private readonly walletsService: WalletsService,
    private quoteGateway: QuotesGateway,
  ) {}

  @Post()
  @SkipAuth()
  async create(@Body() createWalletDto: CreateWalletDto) {
    const onQuoteCreate = await this.walletsService.create(createWalletDto);

    this.quoteGateway.sendMessage(onQuoteCreate);

    return onQuoteCreate;
  }

  @Get()
  @SkipAuth()
  findAll() {
    return this.walletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(+id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletsService.remove(+id);
  }
}
