import { PartialType } from '@nestjs/mapped-types';
import { CreateTookanDto } from './create-tookan.dto';

export class UpdateTookanDto extends PartialType(CreateTookanDto) {}
