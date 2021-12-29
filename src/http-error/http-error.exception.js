import { DEFAULT_MESSAGE, DEFAULT_STATUS } from './constants';

class HttpError extends Error {
  constructor({ status = DEFAULT_STATUS, message = DEFAULT_MESSAGE } = {}) {
    super(message);
    this.status = status;
    this.name = 'HttpError';
  }
}

export { HttpError };
