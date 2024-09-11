import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString } from 'class-validator';

@Schema()
export class Arma extends Document {
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  @IsString()
  codigo: string;

  @Prop({ required: true })
  @IsString()
  nroarma: string;

  @Prop({ required: true })
  @IsString()
  estado: string;

  @Prop({ required: true })
  @IsString()
  clasification: string;

  @Prop({ required: true })
  @IsString()
  propietario: string;

  @Prop({ required: true })
  @IsString()
  modelo: string;

  @Prop({ required: true })
  @IsString()
  calibre: string;

  @Prop({ required: false })
  @IsString()
  observations: string;

  @Prop({ required: true })
  @IsString()
  industria: string;

  @Prop({ required: true })
  @IsString()
  armamento: string;

  @Prop({ required: true })
  @IsString()
  inInventory: string;
}

export const ArmaSchema = SchemaFactory.createForClass(Arma);
