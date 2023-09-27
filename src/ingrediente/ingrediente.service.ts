import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
@Injectable()
export class IngredienteService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  create(id_receita: string, nome: string) {
    const ingrediente = this.knex('ingrediente')
      .insert({ id_receita, nome })
      .returning('*');
    return ingrediente;
  }

  findAll() {
    const ingredientes = this.knex.from('ingrediente').select('*');
    return ingredientes;
  }

  findPerRecipe(id_receita: string) {
    const ingredientes = this.knex
      .from('ingrediente')
      .where({ id_receita: id_receita })
      .select('*');
    return ingredientes;
  }

  findOne(id: number) {
    const ingrediente = this.knex
      .from('ingrediente')
      .where({ id: id })
      .select('*');
    return ingrediente;
  }

  update(id: string, nome: string) {
    const ingrediente = this.knex
      .from('ingrediente')
      .where({ id: id })
      .update(nome)
      .returning('*');
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
