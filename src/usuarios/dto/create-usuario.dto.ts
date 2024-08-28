import { IsString, IsEmail, IsOptional, Matches } from 'class-validator';

export class CreateUsuarioDto {
  readonly createdAt?: Date; // Campo opcional, se asigna automáticamente

  @IsString()
  readonly ci: string;

  @IsString()
  readonly extension: string;

  @IsString()
  @IsOptional()
  readonly grado?: string;

  @IsString()
  @IsOptional()
  readonly especialidad?: string;

  @IsString()
  readonly nombre: string;

  @IsString()
  readonly apellidoPaterno: string;

  @IsString()
  @IsOptional()
  readonly apellidoMaterno?: string;

  readonly cm?: string;

  
  @IsString()
  @IsOptional()
  readonly correo: string;x

  @IsString()
  readonly inSystemPermission: string;

  @IsString()
  readonly rol: string;

  @IsString()
  readonly estado: string;

  @IsString({ message: 'El campo contraseña debe ser una cadena de texto.' })
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, {
    message:
      'La contraseña es demasiado débil. Debe contener al menos una letra mayúscula, una letra minúscula y un número, y tener al menos 8 caracteres.',
  })
  readonly password: string;
}
