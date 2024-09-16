interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}
export class CreateMovimientoDto {
  readonly fechaSalida: EncryptedData;
  readonly fechaRegreso: EncryptedData;
  readonly codigo: EncryptedData;
  readonly solicitante: EncryptedData;
  readonly motivo: EncryptedData;
  readonly actaSalida: EncryptedData;
  readonly actaRegreso: EncryptedData;
}
