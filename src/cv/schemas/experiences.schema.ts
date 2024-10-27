import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ collection: 'experiences' })
export class Experience extends Document {
  @Prop([{ type: MongooseSchema.Types.ObjectId }])
  labels: string[];

  @Prop([{ type: MongooseSchema.Types.ObjectId }])
  skills: string[];

  @Prop()
  begin: string;

  @Prop()
  end: string;

  @Prop()
  company: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  shortdescription: string;

  @Prop()
  projectname: string;

  @Prop()
  published_at: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
