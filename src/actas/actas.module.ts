// src/actas/actas.module.ts
import { Module } from '@nestjs/common';
import { ActasService } from './actas.service';
import { ActasController } from './actas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Acta, ActaSchema } from './schemas/acta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Acta.name, schema: ActaSchema }]),
  ],
  controllers: [ActasController],
  providers: [ActasService],
})
export class ActasModule {}
