import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Acta extends Document {
  @Prop({ required: true, unique: true })
  nroActa: string; // Número del Acta en formato "0001/24"

  @Prop({ required: true })
  nroMovimiento: string; // Número del Movimiento
}

export const ActaSchema = SchemaFactory.createForClass(Acta);
