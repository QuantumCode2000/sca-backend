import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/usuarios/schemas/usuario.schema';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'mySecretKey', // Asegúrate de usar una clave secreta segura en producción
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuariosService],
})
export class AuthModule {}
