import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodoDto } from './create-metodo.dto';

export class UpdateMetodoDto extends PartialType(CreateMetodoDto) {}
