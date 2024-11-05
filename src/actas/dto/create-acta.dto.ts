// src/actas/dto/create-actas.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActaDto {
  @IsNotEmpty()
  @IsString()
  nroActa: string;

  @IsNotEmpty()
  @IsString()
  nroMovimiento: string;
}
