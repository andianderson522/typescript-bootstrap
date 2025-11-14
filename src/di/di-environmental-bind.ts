import { Container } from 'inversify';
import {
  StatsdProvider,
  NoopStatsdProvider,
  DatadogStatsdProvider,
} from '../providers/statsd';
import { DI_TYPES } from './di-types';

// eslint-disable-next-line max-statements
export default function bindEnvironmentals(container: Container): void {
  // Environment Injection Here
  const env = container.get<string>(DI_TYPES.ENVIRONMENT);
  switch (env) {
    case 'test': {
      container
        .bind<StatsdProvider>(DI_TYPES.STATSD_PROVIDER)
        .to(NoopStatsdProvider)
        .inSingletonScope();
      break;
    }
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    case 'local-dev': {
      container
        .bind<StatsdProvider>(DI_TYPES.STATSD_PROVIDER)
        .to(NoopStatsdProvider)
        .inSingletonScope();
      break;
    }
    case 'staging': {
      container
        .bind<StatsdProvider>(DI_TYPES.STATSD_PROVIDER)
        .to(DatadogStatsdProvider)
        .inSingletonScope();
      break;
    }
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    case 'production': {
      container
        .bind<StatsdProvider>(DI_TYPES.STATSD_PROVIDER)
        .to(DatadogStatsdProvider)
        .inSingletonScope();
      break;
    }
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    default: {
      container
        .bind<StatsdProvider>(DI_TYPES.STATSD_PROVIDER)
        .to(NoopStatsdProvider)
        .inSingletonScope();
    }
  }
}
