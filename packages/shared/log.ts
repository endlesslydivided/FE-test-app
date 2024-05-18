import pino from 'pino';
import { get } from 'lodash';

import { env } from './utils';

export const logger = (pino({
  level: env('LOG_LEVEL') || 'error',
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level (label: string) {
      return { level: label };
    },
    bindings () {
      return { }; // removing pid and hostname
    },
  },
}));

export const logCatchError = (action: string, e: unknown): void => {
  if (env('ENV') === 'local') {
    console.error(e);
  } else {
    logger.error({
      action,
      message: get(e, 'message', e),
      stack: JSON.stringify(e, Object.getOwnPropertyNames(e)), // serialise Error object, otherwise it will appear as {}
    });
  }
};
