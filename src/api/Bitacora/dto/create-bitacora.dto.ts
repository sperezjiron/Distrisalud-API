import { Transform } from 'class-transformer';
import { IsInt, IsString, MaxLength, IsDate } from 'class-validator';

export class CreateBitacoraDto {
  @IsInt()
  usuarioId: number;

  @IsString()
  @MaxLength(100)
  accion: string;

  @IsString()
  @MaxLength(100)
  tablaAfectada: string;

  @IsString()
  @MaxLength(150)
  valorAntes: string;

  @IsString()
  @MaxLength(150)
  valorDespues: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  fechaHora: Date;
}
