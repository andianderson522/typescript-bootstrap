// eslint-disable-next-line @typescript-eslint/naming-convention
export const DI_TYPES = {
  APPLICATION: Symbol.for('Server'),
  APPLICATION_HOST: Symbol.for('applicationHost'),
  APPLICATION_PORT: Symbol.for('applicationPort'),
  CNSECRETS_WRAPPER: Symbol.for('CNSecretsWrapper'),
  DATADOG_API_KEY: Symbol.for('datadog_api_key'),
  DATADOG_PREFIX: Symbol.for('datadog_prefix'),
  ENVIRONMENT: Symbol.for('environment'),
  LOGGER: Symbol.for('Logger'),
  LOG_LEVEL: Symbol.for('logLevel'),
  LOG_TYPE: Symbol.for('logType'),
  SECRETS_ID: Symbol.for('secrets_id'),
  SECRETS_REGION: Symbol.for('secrets_region'),
  SECRETS_IS_AWS: Symbol.for('secretsIsAWS'),
  SECRETS_PROCESSOR: Symbol.for('SecretsProcessor'),
  STATSD_PROVIDER: Symbol.for('StatsdProvider'),
};
