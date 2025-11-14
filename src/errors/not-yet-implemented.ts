export default class NotYetImplementedError extends Error {
  constructor(message?: string) {
    super(`NOT_YET_IMPLEMENTED_ERROR${message ? `: ${message}` : ''}`);
    this.name = 'NotYetImplementedError';
  }
}
