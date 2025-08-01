import { Transform } from 'class-transformer';  
import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDate,
  MaxLength,
  Min,
} from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  orderId: number;

  @IsInt()
  methodId: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  receiptUrl?: string;

  @IsString()
  @MaxLength(50)
  paymentStatus: string;

  @IsString()
  @MaxLength(50)
  paymentType: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  paymentDate: Date;

  @IsNumber()
  @Min(0)
  amount: number;
}
