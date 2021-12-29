import mongoose from 'mongoose';
import { logger } from '../../utils';
import { envConfig } from '../../../env-config';

const { db } = envConfig;

export const connectDB = () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${db.user}:${db.password}@${db.cluster}/${db.name}`,
        {
          useNewUrlParser: true,
          retryWrites: true,
          useUnifiedTopology: true,
        },
      )
      .then(() => {
        return logger.info('Successfully connected to db');
      })
      .catch((error) => {
        logger.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
