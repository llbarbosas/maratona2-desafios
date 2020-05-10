import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
    }),
    TypeOrmModule.forFeature([Maratona])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
