interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}

export class CreateArmaDto {
  readonly createdAt?: Date;

  readonly codigo: EncryptedData;

  readonly nroarma: EncryptedData;

  readonly estado: EncryptedData;

  readonly clasification: EncryptedData;

  readonly propietario: EncryptedData;

  readonly modelo: EncryptedData;

  readonly calibre: EncryptedData;

  readonly observations?: EncryptedData;

  readonly industria: EncryptedData;

  readonly armamento: EncryptedData;

  readonly inInventory: EncryptedData;
}
