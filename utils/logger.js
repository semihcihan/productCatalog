const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports:
    process.env.NODE_ENV !== 'production'
      ? [
          new transports.Console({
            format: format.simple(),
          }),
        ]
      : [
          new transports.File({ filename: 'error.log', level: 'error' }),
          new transports.File({ filename: 'combined.log' }),
        ],
});

module.exports = logger;

// //
// // If we're not in production then **ALSO** log to the `console`
// // with the colorized simple format.
// //

// // ***************
// // Allows for JSON logging
// // ***************

// logger.log({
//   level: 'info',
//   message: 'Pass an object and this works',
//   additional: 'properties',
//   are: 'passed along',
// });

// logger.info({
//   message: 'Use a helper method if you want',
//   additional: 'properties',
//   are: 'passed along',
// });

// // ***************
// // Allows for parameter-based logging
// // ***************

// logger.log('info', 'Pass a message and this works', {
//   additional: 'properties',
//   are: 'passed along',
// });

// logger.info('Use a helper method if you want', {
//   additional: 'properties',
//   are: 'passed along',
// });

// // ***************
// // Allows for string interpolation
// // ***************

// // info: test message my string {}
// logger.log('info', 'test message %s', 'my string');

// // info: test message 123 {}
// logger.log('info', 'test message %d', 123);

// // info: test message first second {number: 123}
// logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

// // prints "Found error at %s"
// logger.info('Found %s at %s', 'error', new Date());
// logger.info('Found %s at %s', 'error', new Error('chill winston'));
// logger.info('Found %s at %s', 'error', /WUT/);
// logger.info('Found %s at %s', 'error', true);
// logger.info('Found %s at %s', 'error', 100.0);
// logger.info('Found %s at %s', 'error', ['1, 2, 3']);

// // ***************
// // Allows for logging Error instances
// // ***************

// logger.warn(new Error('Error passed as info'));
// logger.log('error', new Error('Error passed as message'));

// logger.warn('Maybe important error: ', new Error('Error passed as meta'));
// logger.log('error', 'Important error: ', new Error('Error passed as meta'));

// logger.error(new Error('Error as info'));
