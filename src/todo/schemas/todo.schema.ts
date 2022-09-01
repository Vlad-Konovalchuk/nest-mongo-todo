import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  completedAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
