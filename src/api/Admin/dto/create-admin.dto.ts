import { IsInt, IsString, Length } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @Length(1, 50)
  nombre: string;

  @IsInt()
  userId: number;

  // El tipo binario puede representar un estado (ej. activo/inactivo)
  estado: Buffer;
}