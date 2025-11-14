import type { Logger, ILogObj } from 'tslog';
import LocalServer from './app';
import { DIContainer } from './di';
import { DI_TYPES } from './di/di-types';

export default async () => {
  const localServer = DIContainer.get<LocalServer>(DI_TYPES.APPLICATION);
  const logger = DIContainer.get<Logger<ILogObj>>(DI_TYPES.LOGGER);
  logger.trace('Starting local Server');
  await localServer.start();
  logger.trace('local server started');
};
