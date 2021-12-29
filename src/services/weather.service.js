import axios from 'axios';

import { HttpError } from '../http-error';
import { API_URL } from '../constants';
import { logger, getStringifiedQuery } from '../utils';
import { envConfig } from '../../env-config';

const getCurrentWeather = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/weather?${getStringifiedQuery({
        q: 'London',
        appid: envConfig.key,
      })}`,
    );
    return response.data;
  } catch (err) {
    logger.error(err);
    throw new HttpError({
      message: 'Can not get current weather',
      status: 404,
    });
  }
};

export { getCurrentWeather };
