import 'reflect-metadata';
import * as express from 'express';
import * as morgan from 'morgan';
import { InversifyExpressServer } from 'inversify-express-utils';

// IoC
import { container } from './ioc-container';
// Utils
import { logger } from './utils';
import { AppConfig } from '../config/app.config';

// start the server
const server = new InversifyExpressServer(container, null, { rootPath: '/v1' });
server.setConfig((App: express.Application) => {
  const compress = require('compression');

  App.use(compress())
    .use(express.json())
    .use(
      express.urlencoded({
        extended: true
      })
    )
    .use(morgan('combined', { stream: logger.stream }));
});

const app: express.Application = server.build();

// Starts the app
if (process.env.NODE_ENV !== 'unit-test') {
  logger.info('Starting apps...');
  app.listen(AppConfig.port);
}
export default app;
