import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path'

@Controller()
export class AppController {
  constructor() { }

  @Get('/sender')
  sender(@Res() res): string {
    return res.sendFile(path.resolve(__dirname, '../public', 'send.html'));
  }

  @Get('/receiver')
  receiver(@Res() res): string {
    return res.sendFile(path.resolve(__dirname, '../public', 'receive.html'));
  }
}
