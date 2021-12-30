import axios from 'axios';

import { HttpError } from '../http-error';
import { API_URL } from '../constants';
import { logger, getStringifiedQuery } from '../utils';
import { Statistic, Weather } from '../data/models';
import { envConfig } from '../../env-config';

const getCurrentWeather = async (city) => {
  try {
    const weather = await Weather.findOne({ name: city });
    if (weather) {
      return weather;
    }
    const response = await axios.get(
      `${API_URL}/weather?${getStringifiedQuery({
        q: city,
        appid: envConfig.key,
      })}`,
    );
    if (!response || !response.data || !response.data.sys) {
      throw Error();
    }
    const weatherData = {
      ...response.data,
      sys: { ...response.data.sys, sys_type: response.data.sys.type },
    };
    await Weather.create(weatherData);
    await Statistic.create({ name: city });
    return weatherData;
  } catch (err) {
    logger.error(err);
    throw new HttpError({
      message: 'Can not get current weather',
      status: 404,
    });
  }
};

export { getCurrentWeather };
