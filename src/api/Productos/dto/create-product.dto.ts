import { Transform } from 'class-transformer';
import { IsString, IsNumber, Min, IsDate } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  categoryId: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  unit: string;

  @IsString() // o @IsUrl() si es un enlace externo válido
  imageUrl: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  entryDate: Date;
}