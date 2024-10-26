import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { CvController } from './cv/cv.controller';

@Module({
  imports: [PortfolioModule],
  controllers: [AppController, CvController],
  providers: [AppService],
})
export class AppModule {}
