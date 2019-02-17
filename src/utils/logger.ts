import * as winston from 'winston';

const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    //winston.format.colorize({all : true}),
    winston.format.simple(),
    winston.format.json(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'app.log', level: 'info' })
  ]
});
logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  }
};
export { logger };
