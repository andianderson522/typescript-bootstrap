export default interface StatsdProvider {
  gauge(
    key: string,
    value: number,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined
  ): void;

  histogram(
    key: string,
    value: number,
    tags?: string[],
    timestampInMillis?: number,
    options?: unknown
  ): void;

  increment(
    key: string,
    value?: number | undefined,
    tags?: string[] | undefined,
    timestampInMillis?: number | undefined
  ): void;

  distribution(
    key: string,
    value: number,
    tags?: string[],
    timestampInMillis?: number
  ): void;
  // eslint-disable-next-line semi
}
