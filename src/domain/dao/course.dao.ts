import { Student } from '../entity/student.entity';
import { Course } from '../entity/course.entity';

export interface ICourseRepository {
  /**
   * Create a course
   * @param course Course to create
   */
  create(course: Course): Promise<Course>;
  /**
   * Get a course by id
   * @param id Course's id
   */
  get(id: number): Promise<Course>;
  /**
   * Get all courses from repo
   */
  getAll(): Promise<Course[]>;
  //registerStudent(student: Student): Promise<Course>;
}