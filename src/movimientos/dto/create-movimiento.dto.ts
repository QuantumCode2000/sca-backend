import { IsString, IsDate } from 'class-validator';

export class CreateMovimientoDto {
  @IsDate()
  readonly fechaSalida: Date;

  @IsDate()
  readonly fechaRegreso: Date;

  @IsString()
  readonly codigo: string;

  @IsString()
  readonly solicitante: string;

  @IsString()
  readonly motivo: string;

  @IsString()
  readonly actaSalida: string;

  @IsString()
  readonly actaRegreso: string;
}
