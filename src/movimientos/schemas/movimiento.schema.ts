import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IsString, IsDate, IsOptional } from 'class-validator';

@Schema()
export class Movimiento extends Document {
  @Prop({ default: uuidv4 }) // Genera un UUID por defecto para el campo id
  @IsString()
  id: string;

  @Prop({ required: true })
  @IsDate()
  fechaSalida: Date;

  @Prop({ required: true })
  @IsDate()
  fechaRegreso: Date;

  @Prop({ required: true })
  @IsString()
  codigo: string;

  @Prop({ required: true })
  @IsString()
  solicitante: string;

  @Prop({ required: true })
  @IsString()
  motivo: string;

  @Prop({ required: true })
  @IsString()
  actaSalida: string;

  @Prop({ required: true })
  @IsString()
  actaRegreso: string;

  @Prop({ default: Date.now }) // Fecha de creación
  @IsDate()
  createdAt: Date;

  @Prop({ default: null })
  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @Prop({ default: null })
  @IsOptional()
  @IsDate()
  deletedAt?: Date;
}

export const MovimientoSchema = SchemaFactory.createForClass(Movimiento);
