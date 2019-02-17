import { Student } from './../../domain/entity/student.entity';
import { StudentDaoService } from './../../dao/student.service';
import { injectable, inject } from 'inversify';
import { controller, httpPost, httpGet } from 'inversify-express-utils';
import { TYPES } from '../../ioc-container';
import { Request, Response } from 'express';

@controller('/student')
export default class StudentController {
  constructor(@inject('StudentDaoService') private studentDaoSvc: StudentDaoService) {}

  @httpPost('/')
  async registerStudent(req: Request, res: Response) {
    try {
      const { name } = req.body;
      await this.studentDaoSvc.registerStudent(name);
      res.status(200).send(`Student: ${name} registered.`);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  @httpGet('/:id')
  async getStudent(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const student = await this.studentDaoSvc.getStudent(id);
      res.status(200).send(student);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  @httpGet('/')
  async getAllStudents(req: Request, res: Response) {
    try {
      const students: Student[] = await this.studentDaoSvc.getAllStudents();
      res.status(200).send({ students });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
