import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'skill' }) // Specify the collection name
export class CV extends Document {
  @Prop()
  name: string;

  @Prop()
  score: number;

  @Prop()
  goalScore: number;

  @Prop()
  published_at: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  created_by: string; // remove this ?

  @Prop()
  updated_by: string; // remove this ?
}

export const CVSchema = SchemaFactory.createForClass(CV);
