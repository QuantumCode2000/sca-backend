// import { IsOptional } from 'class-validator';

interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}

export class CreateUsuarioDto {
  readonly createdAt?: Date;

  readonly ci: EncryptedData;

  readonly extension: EncryptedData;

  readonly grado?: EncryptedData;

  readonly especialidad?: EncryptedData;

  readonly nombre: EncryptedData;

  readonly apellidoPaterno: EncryptedData;

  readonly apellidoMaterno?: EncryptedData;

  readonly cm?: EncryptedData;

  readonly correo: EncryptedData;

  readonly inSystemPermission: EncryptedData;

  readonly rol: EncryptedData;

  readonly estado: EncryptedData;

  readonly password: EncryptedData;
}
