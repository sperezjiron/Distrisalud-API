import { IsDateString, IsEmail, IsInt, IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsInt()
  userId: number;

  @IsString() @Length(1, 50)
  name: string;

  @IsString() @Length(1, 50)
  cedula: string;

  @IsString() @Length(1, 50)
  tipoCedula: string;

  @IsEmail()
  email: string;

  @IsString() @Length(1, 50)
  telefono: string;

  @IsString() @Length(1, 500)
  direccion: string;

  @IsString() @Length(1, 50)
  codigoPostal: string;

  @IsString() @Length(1, 150)
  nombreNegocio: string;

  @IsString() @Length(1, 50)
  tipoCliente: string;

  @IsString() @Length(1, 50)
  estado: string;

  @IsDateString()
  fechaCreacion: Date;

  @IsDateString()
  fechaUltimoIngreso: Date;
}