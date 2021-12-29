import { run } from '../utils';
import { getCurrentWeather } from '../services';

const routes = [
  {
    method: 'GET',
    url: '/api/current-weather',
    handler: run(() => getCurrentWeather()),
  },
];

export { routes };
