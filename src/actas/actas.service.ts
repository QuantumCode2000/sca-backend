// src/actas/actas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActaDto } from './dto/create-acta.dto';
import { UpdateActaDto } from './dto/update-acta.dto';
import { Acta } from './schemas/acta.schema';

@Injectable()
export class ActasService {
  constructor(@InjectModel(Acta.name) private actaModel: Model<Acta>) {}

  async create(createActaDto: CreateActaDto): Promise<Acta> {
    const newActa = new this.actaModel(createActaDto);
    return await newActa.save();
  }

  async findAll(): Promise<Acta[]> {
    return this.actaModel.find().exec();
  }

  async findOne(id: string): Promise<Acta> {
    const acta = await this.actaModel.findById(id).exec();
    if (!acta) {
      throw new NotFoundException(`Acta with ID ${id} not found`);
    }
    return acta;
  }

  async update(id: string, updateActaDto: UpdateActaDto): Promise<Acta> {
    const updatedActa = await this.actaModel
      .findByIdAndUpdate(id, updateActaDto, { new: true })
      .exec();
    if (!updatedActa) {
      throw new NotFoundException(`Acta with ID ${id} not found`);
    }
    return updatedActa;
  }

  async remove(id: string): Promise<void> {
    const result = await this.actaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Acta with ID ${id} not found`);
    }
  }
}
