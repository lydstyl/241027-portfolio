import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './schemas/skills.schema';
import { Experience } from './schemas/experiences.schema';

@Controller('api')
export class CvController {
  constructor(
    @InjectModel(Skill.name) private cvModel: Model<Skill>,
    @InjectModel(Experience.name) private experienceModel: Model<Experience>,
  ) {}

  @Get('cv')
  async getCVData() {
    const skills = await this.cvModel.find().exec();
    const experiences = await this.experienceModel
      .find()
      .sort({ begin: -1 })
      .exec();
    return { skills, experiences };
  }
}
