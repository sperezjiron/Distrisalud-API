import { IsString, MaxLength } from 'class-validator';

export class CreateMetodoDto {
  @IsString()
  @MaxLength(50)
  nombre: string;
}
