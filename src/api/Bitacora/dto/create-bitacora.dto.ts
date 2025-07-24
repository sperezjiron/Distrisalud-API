import { IsInt, IsString, MaxLength, IsDateString } from 'class-validator';

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

  @IsDateString()
  fechaHora: string;
}
