import { Course } from '../../../domain/entity/course.entity';
import { Student } from '../../../domain/entity/student.entity';
import { injectable } from 'inversify';
import { createConnection, Connection, Repository } from 'typeorm';
import { logger } from '../../../utils';

@injectable()
export class TypeORMConnectionService {

    private _conn: Promise<Connection>;

    public getRepo<T>(target: string | (new () => {})): Promise<Repository<T>> {
        return this._getConn().then((conn) => conn.getRepository<T>(target));
    }

    private _getConn(): Promise<Connection> {

        if (this._conn) {
            return this._conn;
        } else {
            logger.info('Creating sqlite connection pool...');

            return this._conn = createConnection({
                // type: 'mongodb',
                // host: 'localhost',
                // port: 27017,
                type: 'sqlite',
                synchronize: true,
                logging: true,
                database: ':memory:',
                entities: [Student, Course]
            });
        }
    }
}
