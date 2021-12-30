import { run } from '../utils';
import { getCurrentWeather, getStatistic } from '../services';
import { weatherSchema, statisticSchema } from '../schemas';

const routes = [
  {
    method: 'GET',
    url: '/weather/:city',
    schema: weatherSchema,
    handler: run((req) => getCurrentWeather(req.params.city)),
  },
  {
    method: 'GET',
    url: '/statistics/:city/:period',
    schema: statisticSchema,
    handler: run((req) => getStatistic(req.params.city, req.params.period)),
  },
];

export { routes };
