// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('cv') // cela indique de rendre le fichier `cv.ejs`
  getCV() {
    return {}; // on peut passer des données ici si nécessaire
  }
}

// this.appService service ?
