import 'reflect-metadata';
import { Container } from 'inversify';
import bindEnvironmentals from './di-environmental-bind';
import type { StatsdProvider } from '../providers/statsd';
import { DI_TYPES } from './di-types';

describe('di-environmental-binds', () => {
  describe('default', () => {
    it('binds all defaults', () => {
      const container = new Container();
      container.bind<string>(DI_TYPES.ENVIRONMENT).toConstantValue('unknown');
      bindEnvironmentals(container);
      const statsdProvider = container.get<StatsdProvider>(
        DI_TYPES.STATSD_PROVIDER
      );
      expect(statsdProvider).toBeDefined();
    });
  });
  describe('test', () => {
    it('binds all test', () => {
      const container = new Container();
      container.bind<string>(DI_TYPES.ENVIRONMENT).toConstantValue('test');
      bindEnvironmentals(container);
      const statsdProvider = container.get<StatsdProvider>(
        DI_TYPES.STATSD_PROVIDER
      );
      expect(statsdProvider).toBeDefined();
    });
  });
  describe('local-dev', () => {
    it('binds all local-dev', () => {
      const container = new Container();
      container.bind<string>(DI_TYPES.ENVIRONMENT).toConstantValue('local-dev');
      bindEnvironmentals(container);
      const statsdProvider = container.get<StatsdProvider>(
        DI_TYPES.STATSD_PROVIDER
      );
      expect(statsdProvider).toBeDefined();
    });
  });
  describe('staging', () => {
    it('binds all staging', () => {
      const container = new Container();
      container.bind<string>(DI_TYPES.ENVIRONMENT).toConstantValue('staging');
      container.bind<string>(DI_TYPES.DATADOG_API_KEY).toConstantValue('abc');
      container.bind<string>(DI_TYPES.DATADOG_PREFIX).toConstantValue('prefix');
      bindEnvironmentals(container);
      const statsdProvider = container.get<StatsdProvider>(
        DI_TYPES.STATSD_PROVIDER
      );
      expect(statsdProvider).toBeDefined();
    });
  });
  describe('production', () => {
    it('binds all production', () => {
      const container = new Container();
      container
        .bind<string>(DI_TYPES.ENVIRONMENT)
        .toConstantValue('production');
      container.bind<string>(DI_TYPES.DATADOG_API_KEY).toConstantValue('abc');
      container.bind<string>(DI_TYPES.DATADOG_PREFIX).toConstantValue('prefix');
      bindEnvironmentals(container);
      const statsdProvider = container.get<StatsdProvider>(
        DI_TYPES.STATSD_PROVIDER
      );
      expect(statsdProvider).toBeDefined();
    });
  });
});
