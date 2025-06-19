import { IsDateString, IsNumber, IsString, Min, IsUrl } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  methodId: number;

  @IsUrl()
  receiptUrl: string;

  @IsString()
  paymentStatus: string;

  @IsString()
  paymentType: string;

  @IsDateString()
  paymentDate: string;

  @IsNumber()
  @Min(0)
  amount: number;
}