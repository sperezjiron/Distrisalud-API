import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  pass: string;

  @IsNumber()
  rolId: number;

  @IsNumber()
  estado: number;
}
