import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsDateString()
  date: string;

  @IsString()
  status: string;

  @IsNumber()
  clientId: number;

  @IsNumber()
  @Min(0)
  totalAmount: number;
}