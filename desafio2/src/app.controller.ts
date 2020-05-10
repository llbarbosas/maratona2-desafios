import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/maratona')
  getAll() {
    return this.appService.getAll();
  }

  @Post('/maratona')
  create(@Body('aula') aula: string) {
    return this.appService.create(aula);
  }
}
