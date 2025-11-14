import 'reflect-metadata';
import type { ILogObj, Logger } from 'tslog';
import { DIContainer } from './di';
import type LocalServer from './app/server';
import { DI_TYPES } from './di/di-types';

const log = DIContainer.get<Logger<ILogObj>>(DI_TYPES.LOGGER);
const server = DIContainer.get<LocalServer>(DI_TYPES.APPLICATION);
server
  .start()
  .then(() => {
    log.info('Started Server');
  })
  .catch((err) => {
    log.error(err);
  });
