import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';
import { IngredienteService } from '../ingrediente/ingrediente.service';
import { IngredienteModule } from 'src/ingrediente/ingrediente.module';

@Module({
  imports: [IngredienteModule],
  controllers: [ReceitaController],
  providers: [ReceitaService, IngredienteService],
  exports: [ReceitaService],
})
export class ReceitaModule {}
