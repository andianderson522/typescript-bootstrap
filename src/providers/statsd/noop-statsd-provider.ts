/* eslint-disable no-empty-function */
/* eslint-disable max-params */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { injectable } from 'inversify';
import type StatsdProvider from './statsd-provider';

@injectable()
export default class NoopStatsdProvider implements StatsdProvider {
  gauge(
    _key: string,
    _value: number,
    _tags?: string[] | undefined,
    _timestampInMillis?: number | undefined
  ): void {}

  histogram(
    _key: string,
    _value: number,
    _tags?: string[] | undefined,
    _timestampInMillis?: number | undefined,
    _options?: unknown
  ): void {}

  increment(
    _key: string,
    _value?: number | undefined,
    _tags?: string[] | undefined,
    _timestampInMillis?: number | undefined
  ): void {}

  distribution(
    _key: string,
    _value: number,
    _tags?: string[] | undefined,
    _timestampInMillis?: number | undefined
  ): void {}
}
