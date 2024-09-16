import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}

@Schema()
export class Arma extends Document {
  @Prop({ default: Date.now })
  createdAt: Date;

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
  nroarma: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  estado: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  clasification: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  propietario: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  modelo: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  calibre: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  observations: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  industria: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  armamento: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  inInventory: EncryptedData;
}

export const ArmaSchema = SchemaFactory.createForClass(Arma);
