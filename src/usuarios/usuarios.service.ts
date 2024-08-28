import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './schemas/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async findOneByEmail(correo: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findOne({ correo }).exec();
    if (!usuario) {
      throw new NotFoundException(`Usuario con correo ${correo} no encontrado`);
    }
    return usuario;
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const existingUsuario = await this.usuarioModel
      .findByIdAndUpdate(id, updateUsuarioDto, { new: true })
      .exec();

    if (!existingUsuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return existingUsuario;
  }

  async remove(id: string): Promise<Usuario> {
    const deletedUsuario = await this.usuarioModel.findByIdAndDelete(id).exec();

    if (!deletedUsuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return deletedUsuario;
  }
}
