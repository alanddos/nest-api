import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//modulo de autenticação
import { AuthModule } from './auth/auth.module';

//modulo de usuarios
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service'

//conexao com o banco da dados
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
//import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(),//forRoot sem paramentos busca do ormconfig.json
    UsersModule,
    //PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}  
 }
