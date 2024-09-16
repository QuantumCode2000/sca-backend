import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface EncryptedData {
  aes_encrypted_data: string;
  rsa_encrypted_key: string;
  iv: string;
}

@Schema()
export class Usuario extends Document {
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  ci: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  extension: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  grado?: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  especialidad?: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  nombre: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  apellidoPaterno: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  apellidoMaterno?: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  cm?: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
  })
  correo?: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  inSystemPermission: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  rol: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  estado: EncryptedData;

  @Prop({
    type: {
      aes_encrypted_data: { type: String, required: true },
      rsa_encrypted_key: { type: String, required: true },
      iv: { type: String, required: true },
    },
    required: true,
  })
  password: EncryptedData;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
