import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  correo: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  password: string;
}