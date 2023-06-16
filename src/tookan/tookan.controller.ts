import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TookanService } from './tookan.service';
import { CreateTookanDto } from './dto/create-tookan.dto';
import { UpdateTookanDto } from './dto/update-tookan.dto';

@Controller('tookan')
export class TookanController {
  constructor(private readonly tookanService: TookanService) {}

  @Post()
  create(@Body() createTookanDto: CreateTookanDto) {
    return this.tookanService.create(createTookanDto);
  }

  @Get()
  findAll() {
    return this.tookanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tookanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTookanDto: UpdateTookanDto) {
    return this.tookanService.update(+id, updateTookanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tookanService.remove(+id);
  }
}
