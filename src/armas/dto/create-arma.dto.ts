import { IsString, IsOptional } from 'class-validator';

export class CreateArmaDto {
  @IsString()
  readonly id?: string; // Campo opcional, se genera automáticamente

  @IsString()
  readonly codigo: string;

  @IsString()
  readonly nroarma: string;

  @IsString()
  readonly estado: string;

  @IsString()
  readonly clasification: string;

  @IsString()
  readonly propietario: string;

  @IsString()
  readonly modelo: string;

  @IsString()
  readonly calibre: string;

  @IsString()
  @IsOptional()
  readonly observations?: string;

  @IsString()
  readonly industria: string;

  @IsString()
  readonly armamento: string;
}
