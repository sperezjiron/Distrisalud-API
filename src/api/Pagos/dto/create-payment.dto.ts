import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
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

  @IsDateString()
  paymentDate: string;

  @IsNumber()
  @Min(0)
  amount: number;
}
