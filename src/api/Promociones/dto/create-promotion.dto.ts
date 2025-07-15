import { IsString, IsNumber, Min, Max, IsDateString } from 'class-validator';

export class CreatePromotionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  discount: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  status: Buffer; // sin validadores, o con lógica personalizada
}
