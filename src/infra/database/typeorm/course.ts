import { Course } from '../../../domain/entity/course.entity';
import { ICourseRepository } from '../../../domain/dao/course.dao';
import { TypeORMConnectionService } from './connection';
import { injectable, inject } from 'inversify';

@injectable()
export class TypeORMCourse implements ICourseRepository {
  constructor(@inject('CourseRepository') private conn: TypeORMConnectionService){}

  private repo() {
    return this.conn.getRepo<Course>(Course);
  }

  async create(course: Course): Promise<Course> {
    const repo = await this.repo();
    return repo.save(course);
  }

  async get(id: number): Promise<Course> {
    const repo = await this.repo();
    return repo.findOne(id);
  }

  async getAll(): Promise<Course[]> {
    const repo = await this.repo();
    return repo.find();
  }
}