import { Delete, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/schemas/usuario.schema';
import { LoginDto } from './dto/login.dto';
import axios from 'axios';

const ENCRYPTION_API_URL = 'http://127.0.0.1:8000';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async login({ correo, password }: LoginDto) {
    const usuarios = await this.usuarioModel.find().lean().exec();
    const usuariosSinId = usuarios.map(
      ({ _id, __v, createdAt, ...usuario }) => usuario,
    );

    const removeIdFields = (arr) => {
      return arr.map((item) => {
        Object.keys(item).forEach((key) => {
          if (item[key]._id) {
            delete item[key]._id;
          }
        });
        return item;
      });
    };

    const dataForWork = removeIdFields(usuariosSinId);
    const response = await axios.post(
      `${ENCRYPTION_API_URL}/decrypt_objects`,
      dataForWork, // Enviar directamente el arreglo de objetos
    );

    console.log(response);

    const user = response.data.data.find(
      (usuario) => usuario.correo === correo,
    );

    if (!user) {
      throw new UnauthorizedException('Correo no válido');
    }

    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña no válida');
    }

    const payload = {
      correo: user.correo,
      sub: user['_id'],
      rol: user.rol,
      nombre: `${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno}`,
    };
    const token = this.jwtService.sign(payload);

    return {
      accessToken: token,
    };
  }
}
