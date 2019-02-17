import { IStudentDao } from './../../../domain/dao/student.dao';
import { TypeORMConnectionService } from './connection';
import { Student } from '../../../domain/entity/student.entity';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../ioc-container';

@injectable()
export class TypeORMStudent implements IStudentDao {
  constructor(@inject('TypeORMConnectionService') private conn: TypeORMConnectionService) {}

  private repo() {
    return this.conn.getRepo<Student>(Student);
  }

  async create(student: Student): Promise<Student> {
    const repo = await this.repo();
    return repo.save(student);
  }

  async getStudent(id: number): Promise<Student> {
    const repo = await this.repo();
    return repo.findOne(id);
  }

  async getAll(): Promise<Student[]> {
    const repo = await this.repo();
    return repo.find();
  }
}
