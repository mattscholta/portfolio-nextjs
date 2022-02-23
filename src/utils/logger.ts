import pino from 'pino';
import { PrettyOptions } from 'pino-pretty';

import { COOKIE_AUTH_TOKEN } from '@src/config/cookies';

const prettyConfig: PrettyOptions = {
  colorize: true,
  ignore: 'hostname,pid',
  levelFirst: true,
  translateTime: 'SYS:standard'
};

/**
 * @name logger
 * @external https://getpino.io
 * @description A high-performance logger for NodeJS applications
 */
const logger = pino({
  name: 'mattscholta',

  // prettyPrint: !IS_PRODUCTION ? prettyConfig : false,
  redact: [`req.cookies.${COOKIE_AUTH_TOKEN}`],

  transport: {
    options: {
      colorize: true,
      options: prettyConfig
    },
    target: 'pino-pretty'
  }
});

export { logger };
