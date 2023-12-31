import { Module } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { IngredienteController } from './ingrediente.controller';

@Module({
  controllers: [IngredienteController],
  providers: [IngredienteService],
  exports: [IngredienteService],
})
export class IngredienteModule {}
