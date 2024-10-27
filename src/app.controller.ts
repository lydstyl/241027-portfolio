import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('cv')
  getCV() {
    return {}; // on peut passer des données ici si nécessaire
  }
}
