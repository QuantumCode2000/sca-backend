import { Module } from '@nestjs/common';
import { ArmasService } from './armas.service';
import { ArmasController } from './armas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArmaSchema } from './schemas/arma.schema';
import { Arma } from './schemas/arma.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Arma.name,
        schema: ArmaSchema,
      },
    ]),
  ],
  controllers: [ArmasController],
  providers: [ArmasService],
})
export class ArmasModule {}
