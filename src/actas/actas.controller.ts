// src/actas/actas.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActasService } from './actas.service';
import { CreateActaDto } from './dto/create-acta.dto';
import { UpdateActaDto } from './dto/update-acta.dto';
import { Acta } from './schemas/acta.schema';

@Controller('actas')
export class ActasController {
  constructor(private readonly actasService: ActasService) {}

  @Post()
  create(@Body() createActaDto: CreateActaDto): Promise<Acta> {
    return this.actasService.create(createActaDto);
  }

  @Get()
  findAll(): Promise<Acta[]> {
    return this.actasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Acta> {
    return this.actasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActaDto: UpdateActaDto,
  ): Promise<Acta> {
    return this.actasService.update(id, updateActaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.actasService.remove(id);
  }
}
