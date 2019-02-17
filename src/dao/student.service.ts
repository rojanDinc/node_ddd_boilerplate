import { IStudentDao } from './../domain/dao/student.dao';
import { Student } from './../domain/entity/student.entity';
import { inject, injectable } from 'inversify';
import { TYPES } from '../ioc-container';

@injectable()
export class StudentDaoService {
  @inject('StudentDao') private studentDao: IStudentDao;

  async registerStudent(name: string) {
    const student = new Student(name);
    await this.studentDao.create(student);
  }

  getStudent = async (id: number): Promise<Student> => this.studentDao.getStudent(id);
  getAllStudents = async (): Promise<Student[]> => this.studentDao.getAll();
}
