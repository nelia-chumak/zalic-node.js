import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { routes } from './src/routes';
import { envConfig } from './env-config';
import { connectDB } from './src/data/db';
import { logger } from './src/utils';

const server = fastify();

server.register(fastifyCors, {
  origin: ['https://zalic.herokuapp.com/'],
  methods: ['GET', 'POST']
});

routes.forEach((route) => {
  server.route(route);
});

connectDB();

server.listen(envConfig.port || 3000, envConfig.host, (err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`Server listening at port ${envConfig.port}`);
});
