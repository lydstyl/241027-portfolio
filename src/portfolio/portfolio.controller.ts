import { Controller, Get, Render } from '@nestjs/common';

@Controller('portfolio')
export class PortfolioController {
  @Get()
  @Render('portfolio')
  getPortfolio() {
    return { title: 'Mon Portfolio' };
  }
}
