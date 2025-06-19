import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  pass: string;
}
// This DTO is used to validate the data when creating a new user.
