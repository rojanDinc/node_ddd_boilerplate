import { StudentDaoService } from './dao/student.service';
import { TypeORMCourse } from './infra/database/typeorm/course';
import { TypeORMStudent } from './infra/database/typeorm/student';
import { TypeORMConnectionService } from './infra/database/typeorm/connection';
import { Container } from 'inversify';
import { IStudentDao } from './domain/dao/student.dao';
import { TYPE, interfaces } from 'inversify-express-utils';
import StudentController from './presentation/controllers/student.controller';

const container = new Container();
const TYPES = {
  student: {
    StudentDao: Symbol.for('StudentDao'),
    StudentDaoService: Symbol.for('StudentDaoService'),
    TypeORMConnectionService: Symbol.for('TypeORMConnectionService')
  }
};

// Student
container
  .bind<interfaces.Controller>(TYPE.Controller)
  .to(StudentController)
  .whenTargetNamed('Student_Controller');
container.bind<StudentDaoService>('StudentDaoService').to(StudentDaoService);
container.bind<IStudentDao>('StudentDao').to(TypeORMStudent);

// Database
container
  .bind<TypeORMConnectionService>('TypeORMConnectionService')
  .to(TypeORMConnectionService)
  .inSingletonScope();

export { container, TYPES };
