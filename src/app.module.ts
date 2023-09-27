import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitaModule } from './receita/receita.module';
import { KnexModule } from 'nest-knexjs';
import { IngredienteModule } from './ingrediente/ingrediente.module';

@Module({
  imports: [
    ReceitaModule,
    IngredienteModule,
    KnexModule.forRoot({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          connectionString:
            'postgres://midnightznt:5pSlc3mvPUeu@ep-quiet-morning-38352503-pooler.us-east-2.aws.neon.tech/neondb',
          host: 'ep-quiet-morning-38352503-pooler.us-east-2.aws.neon.tech',
          port: 5432,
          database: 'neondb',
          password: '5pSlc3mvPUeu',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
