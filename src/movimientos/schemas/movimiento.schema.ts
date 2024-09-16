import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}

@Schema()
export class Movimiento extends Document {
  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  fechaSalida: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  fechaRegreso: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  codigo: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  solicitante: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  motivo: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  actaSalida: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  actaRegreso: EncryptedData;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: null })
  updatedAt?: Date;

  @Prop({ default: null })
  deletedAt?: Date;
}

export const MovimientoSchema = SchemaFactory.createForClass(Movimiento);
