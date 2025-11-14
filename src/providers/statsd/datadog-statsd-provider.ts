/* eslint-disable class-methods-use-this */
import { inject, injectable } from 'inversify';
import metrics from 'datadog-metrics';
import type StatsdProvider from './statsd-provider';
import { DI_TYPES } from '../../di/di-types';

@injectable()
export default class DatadogStatsdProvider implements StatsdProvider {
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    @inject(DI_TYPES.DATADOG_API_KEY) api_key: string,
    @inject(DI_TYPES.DATADOG_PREFIX) prefix: string
  ) {
    metrics.init({
      apiKey: api_key,
      prefix: prefix,
    });
  }

  gauge(
    key: string,
    value: number,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined
  ): void {
    metrics.gauge(key, value, tags, timestampInMillis);
  }

  // eslint-disable-next-line max-params
  histogram(
    key: string,
    value: number,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined,
    options?: unknown
  ): void {
    metrics.histogram(key, value, tags, timestampInMillis, options);
  }

  increment(
    key: string,
    value?: number | undefined,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined
  ): void {
    metrics.increment(key, value, tags, timestampInMillis);
  }

  distribution(
    key: string,
    value: number,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined
  ): void {
    metrics.distribution(key, value, tags, timestampInMillis);
  }
}
