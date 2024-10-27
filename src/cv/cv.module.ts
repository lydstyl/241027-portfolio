import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CvController } from './cv.controller';
import { CV, CVSchema } from './schemas/cv.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CV.name, schema: CVSchema }])],
  controllers: [CvController],
})
export class CvModule {}
