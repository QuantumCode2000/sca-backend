import { IsString } from 'class-validator';

export class CreateMovimientoDto {
  @IsString()
  readonly fechaSalida: string;

  @IsString()
  readonly fechaRegreso: string;

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
