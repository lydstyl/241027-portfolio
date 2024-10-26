import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class CvController {
  @Get()
  @Render('cv')
  root() {
    return { title: 'Mon CV' };
  }
}
