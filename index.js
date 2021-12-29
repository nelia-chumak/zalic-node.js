import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { connectDB } from './src/data/db';
import { logger } from './src/utils';
import { envConfig } from './env-config';
import { routes } from './src/routes';

const server = fastify();

server.register(fastifyCors, {
  origin: ['http://localhost:3001/', 'https://zalic.herokuapp.com/'],
  methods: ['GET', 'POST']
});

routes.forEach((route) => {
  server.route(route);
});

connectDB();

const {
  app: { port, host }
} = envConfig;

server.listen(port || 3000, host, (err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`Server listening at port ${port}`);
});
