import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CV } from './schemas/cv.schema';

@Controller('api')
export class CvController {
  constructor(
    @InjectModel(CV.name) private cvModel: Model<CV>,
    @InjectConnection() private connection: Connection,
  ) {}

  @Get('cv')
  async getCVData() {
    const db = this.connection.db;
    const collection = db.collection('skill');

    // Let's see what's in the collection with a detailed query
    const skills = await collection
      .find({})
      .project({ name: 1, score: 1, _id: 0 })
      .toArray();
    console.log('Collection content:', await collection.countDocuments());
    console.log('Sample document:', await collection.findOne({}));

    return skills;
  }
}
