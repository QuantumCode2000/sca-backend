import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IsString } from 'class-validator';

@Schema()
export class Arma extends Document {
  @Prop({ default: uuidv4 }) // Genera un UUID por defecto para el campo id
  @IsString()
  id: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  codigo: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  nroarma: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  estado: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  clasification: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  propietario: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  modelo: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  calibre: string;

  @Prop({ required: false }) // Campo opcional
  @IsString()
  observations: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  industria: string;

  @Prop({ required: true }) // Campo requerido
  @IsString()
  armamento: string;

  @Prop({ default: Date.now }) // Campo requerido
  createdAt: Date;
}

export const ArmaSchema = SchemaFactory.createForClass(Arma);
