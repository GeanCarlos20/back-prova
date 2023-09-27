import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Controller('receita')
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    console.log('dto')
    return this.receitaService.create(createReceitaDto);
  }

  @Get()
  findAll() {
    return this.receitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitaService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitaService.remove(+id);
  }
}
