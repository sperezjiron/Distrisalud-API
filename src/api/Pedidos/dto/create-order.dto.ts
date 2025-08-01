import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;

  @IsString()
  status: string;

  @IsNumber()
  clientId: number;

  @IsNumber()
  @Min(0)
  totalAmount: number;
}