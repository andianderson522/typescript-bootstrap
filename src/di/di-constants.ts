import { Container } from 'inversify';
import config from 'config';
import { DI_TYPES } from './di-types';

export default function bindConstants(container: Container): void {
  // Injectable constants here
  container
    .bind<string>(DI_TYPES.ENVIRONMENT)
    .toConstantValue(config.get<string>('environment'));
  container
    .bind<string>(DI_TYPES.APPLICATION_HOST)
    .toConstantValue(config.get<string>('application.host'));
  container
    .bind<number>(DI_TYPES.APPLICATION_PORT)
    .toConstantValue(config.get<number>('application.port'));
  container
    .bind<string>(DI_TYPES.LOG_LEVEL)
    .toConstantValue(config.get<string>('Logger.level'));
  container
    .bind<string>(DI_TYPES.LOG_TYPE)
    .toConstantValue(config.get<string>('Logger.type'));
  container
    .bind<string>(DI_TYPES.DATADOG_API_KEY)
    .toConstantValue(config.get<string>('datadog.api_key'));
  container
    .bind<string>(DI_TYPES.DATADOG_PREFIX)
    .toConstantValue(config.get<string>('datadog.prefix'));
}
