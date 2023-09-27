import { Controller, Get, Post, Body, Patch,Put, Param, Delete } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Controller('ingrediente')
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Post()
  create(@Body() id_receita: string, nome: string) {
    return this.ingredienteService.create(id_receita, nome);
  }

  @Get()
  findAll() {
    return this.ingredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredienteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() name: string) {
    return this.ingredienteService.update(id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredienteService.remove(+id);
  }
}
