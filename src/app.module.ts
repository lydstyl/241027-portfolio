import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PortfolioModule } from './portfolio/portfolio.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CvModule } from './cv/cv.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: '210119-gabriel-brun-resume-backend', // Add the name of your database here
    }),
    PortfolioModule,
    CvModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
