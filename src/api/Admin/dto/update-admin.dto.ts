import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsOptional, IsInt } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsOptional()
  @IsInt()
  estado?: number;  // Aquí lo cambiamos a número (1 o 0) para que el PATCH funcione correctamente
}
