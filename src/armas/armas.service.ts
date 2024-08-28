import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Arma } from './schemas/arma.schema';

@Injectable()
export class ArmasService {
  constructor(
    @InjectModel(Arma.name) private readonly armaModel: Model<Arma>,
  ) {}

  async create(createArmaDto: CreateArmaDto): Promise<Arma> {
    const createdArma = new this.armaModel(createArmaDto);
    return createdArma.save();
  }

  async findAll(): Promise<Arma[]> {
    return this.armaModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Arma> {
    const arma = await this.armaModel.findById(id).exec();
    if (!arma) {
      throw new NotFoundException(`Arma con ID ${id} no encontrada`);
    }
    return arma;
  }

  async update(id: string, updateArmaDto: UpdateArmaDto): Promise<Arma> {
    const updatedArma = await this.armaModel
      .findByIdAndUpdate(id, updateArmaDto, { new: true })
      .exec();

    if (!updatedArma) {
      throw new NotFoundException(`Arma con ID ${id} no encontrada`);
    }

    return updatedArma;
  }

  async remove(id: string): Promise<Arma> {
    const deletedArma = await this.armaModel.findByIdAndDelete(id).exec();

    if (!deletedArma) {
      throw new NotFoundException(`Arma con ID ${id} no encontrada`);
    }

    return deletedArma;
  }
}
