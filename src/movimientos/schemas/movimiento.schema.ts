import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsDate, IsOptional } from 'class-validator';

@Schema()
export class Movimiento extends Document {
  @Prop({ required: true })
  @IsString()
  fechaSalida: string;

  @Prop({ required: true })
  @IsString()
  fechaRegreso: string;

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
