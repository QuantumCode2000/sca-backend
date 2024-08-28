import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movimiento } from './schemas/movimiento.schema';

@Injectable()
export class MovimientosService {
  constructor(
    @InjectModel(Movimiento.name)
    private readonly movimientoModel: Model<Movimiento>,
  ) {}

  async create(createMovimientoDto: CreateMovimientoDto): Promise<Movimiento> {
    const createdMovimiento = new this.movimientoModel(createMovimientoDto);
    return createdMovimiento.save();
  }

  async findAll(): Promise<Movimiento[]> {
    return this.movimientoModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Movimiento> {
    const movimiento = await this.movimientoModel.findById(id).exec();
    if (!movimiento) {
      throw new NotFoundException(`Movimiento con ID ${id} no encontrado`);
    }
    return movimiento;
  }

  async update(
    id: string,
    updateMovimientoDto: UpdateMovimientoDto,
  ): Promise<Movimiento> {
    const updatedMovimiento = await this.movimientoModel
      .findByIdAndUpdate(id, updateMovimientoDto, { new: true })
      .exec();

    if (!updatedMovimiento) {
      throw new NotFoundException(`Movimiento con ID ${id} no encontrado`);
    }

    return updatedMovimiento;
  }

  async remove(id: string): Promise<Movimiento> {
    const deletedMovimiento = await this.movimientoModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedMovimiento) {
      throw new NotFoundException(`Movimiento con ID ${id} no encontrado`);
    }

    return deletedMovimiento;
  }
}
