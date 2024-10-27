import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CvController } from './cv.controller';
import { Skill, SkillSchema } from './schemas/skills.schema';
import { Experience, ExperienceSchema } from './schemas/experiences.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Skill.name, schema: SkillSchema },
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  controllers: [CvController],
})
export class CvModule {}
