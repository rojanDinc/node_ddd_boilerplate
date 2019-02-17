import { Student } from './student.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 127})
  title: string;

  @ManyToMany(type => Student)
  @JoinTable()
  students: Student[];

  constructor(title?: string) {
    this.title = title;
  }
  
  /**
   * Registers this course to a student if student is
   * not registered to this course.
   * @param student The student to register
   */
  registerStudent(student: Student) {
    if(this.students.includes(student)){
      throw new Error('This student is already registered to this course.');
    } else {
      this.students.push(student);
    }
  }
}