import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArmasService } from './armas.service';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';

@Controller('armas')
export class ArmasController {
  constructor(private readonly armasService: ArmasService) {}

  @Post()
  async create(@Body() createArmaDto: CreateArmaDto) {
    return this.armasService.create(createArmaDto);
  }

  @Get()
  async findAll() {
    return this.armasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.armasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArmaDto: UpdateArmaDto) {
    return this.armasService.update(id, updateArmaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.armasService.remove(id);
  }
}
