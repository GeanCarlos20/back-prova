import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { IngredienteService } from 'src/ingrediente/ingrediente.service';
import { CreateIngredienteDto } from 'src/ingrediente/dto/create-ingrediente.dto';
@Injectable()
export class ReceitaService {
  constructor(@InjectModel() private readonly knex: Knex, private ingrediente:IngredienteService) {}
  async create(createReceitaDto: CreateReceitaDto) {
    try {
      const { ingredientes, ...ReceitaDto } = createReceitaDto;
      console.log(ingredientes)
       const receita = await this.knex('receita')
         .insert(ReceitaDto)
         .returning(['id','nome', 'tempoPreparo', 'custoAproximado']);
         ingredientes.forEach((ingrediente) => {
            this.addIngrediente(receita[0].id,ingrediente);
          });

        return receita;
    } catch (error) {
        throw error;
    }
    return 'This action adds a new receita';
  }

  async addIngrediente(id_receita:string,nome:string) {
    try{
      const ingrediente = await this.ingrediente.create(id_receita, nome);
      return ingrediente;
    }catch(error){
      throw error;
    }
  }

  async findAll() {
const receitas = await this.knex
  .select(
    'receita.id',
    this.knex.raw('array_agg(ingrediente.nome) as ingredientes'),
    'receita.nome',
    'receita.tempoPreparo',
    'receita.custoAproximado',
  )
  .from('receita')
  .join('ingrediente', 'ingrediente.id_receita', 'receita.id')
  .groupBy(
    'receita.id',
    'receita.nome',
    'receita.tempoPreparo',
    'receita.custoAproximado',
  );

      
      console.log(receitas)
    return receitas;
  }

  async findOne(id: number):Promise<CreateReceitaDto> {

    const receita : CreateReceitaDto = await this.knex
      .from('receita')
      .where({ id: id }).first();
    receita.ingredientes = await this.ingrediente.findPerRecipe(id.toString());
    return receita;
  }

  update(id: string, updateReceitaDto: UpdateReceitaDto) {
    const { ingredientes, ...ReceitaDto } = updateReceitaDto;
    const receita = this.knex('receita').where({ id: id }).update(ReceitaDto).returning('*');
    ingredientes!.forEach((ingrediente) => {
      this.updateIngrediente(id, ingrediente);
    });

    return receita;
  }

  updateIngrediente(id: string, nome: string) {
    const ingrediente = this.ingrediente.update(id, nome);
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
