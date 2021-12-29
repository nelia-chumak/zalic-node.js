import * as dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    cluster: process.env.DB_CLUSTER
  },
  port: process.env.PORT,
  host: process.env.HOST
};
