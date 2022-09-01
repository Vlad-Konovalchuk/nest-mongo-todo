import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument, Todo } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    const result = await this.model.find().exec();
    return result;
  }

  async findOne(id: string): Promise<Todo> {
    const result = await this.model.findById(id).exec();
    return result;
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const result = await new this.model(createTodoDto).save();
    return result;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const result = await this.model.findByIdAndUpdate(id, updateTodoDto);
    return result;
  }

  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
