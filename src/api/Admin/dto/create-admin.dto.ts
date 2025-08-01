import { IsInt, IsString, Length, Min, Max } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @Length(1, 50)
  nombre: string;

  @IsInt()
  userId: number;

  @IsInt()
  @Min(0)
  @Max(1)
  estado: number; // ✅ Cambiar de Buffer a number
}
