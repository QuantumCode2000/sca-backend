import { IsString, IsEmail, IsOptional, Matches } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  @IsString()
  ci: string;

  @Prop({ required: true })
  @IsString()
  extension: string;

  @Prop()
  @IsString()
  @IsOptional()
  grado: string;

  @Prop()
  @IsString()
  @IsOptional()
  especialidad: string;

  @Prop({ required: true })
  @IsString()
  nombre: string;

  @Prop({ required: true })
  @IsString()
  apellidoPaterno: string;

  @Prop()
  @IsString()
  @IsOptional()
  apellidoMaterno: string;

  @Prop()
  @IsString()
  @IsOptional()
  cm: string;

  @Prop({ required: true, unique: true })
  @IsString()
  correo: string;

  @Prop({ required: true })
  @IsString()
  inSystemPermission: string;

  @Prop({ required: true })
  @IsString()
  rol: string;

  @Prop({ required: true })
  @IsString()
  estado: string;

  @Prop({ required: true })
  @IsString()
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
