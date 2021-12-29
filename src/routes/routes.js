import { run } from '../utils';
import { logGet, logPost } from '../services';

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: run(() => logGet())
  },
  {
    method: 'POST',
    url: '/',
    handler: run((req) => logPost(req.body))
  }
];

export { routes };
