import { Student } from '../entity/student.entity';
export interface IStudentDao {
  /**
   * Create a student
   * @param student Student to create
   */
  create(student: Student): Promise<Student>;
  /**
   * Get a student by id
   * @param id Student's id
   */
  getStudent(id: number): Promise<Student>;
  /**
   * Get all students in repo
   */
  getAll(): Promise<Student[]>;
}