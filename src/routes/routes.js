import { run } from '../utils';
import { getCurrentWeather, getStatistic } from '../services';

const routes = [
  {
    method: 'GET',
    url: '/weather/:city',
    handler: run((req) => getCurrentWeather(req.params.city)),
  },
  {
    method: 'GET',
    url: '/statistics/:city/:period',
    handler: run((req) => getStatistic(req.params.city, req.params.period)),
  },
];

export { routes };
