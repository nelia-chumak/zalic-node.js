import { run } from '../utils';
import { logGet, logPost } from '../services';

const routes = [
  {
    method: 'GET',
    url: '/api',
    handler: run(() => logGet())
  },
  {
    method: 'POST',
    url: '/api',
    handler: run((req) => logPost(req.body))
  }
];

export { routes };
