import { HttpError } from '../http-error';
import { logger, getTimeFromPeriod } from '../utils';
import { Statistic } from '../data/models';

const getStatistic = async (city, period) => {
  try {
    const statistic = await Statistic.find({
      name: city,
      crated_at: { $gt: getTimeFromPeriod(period) },
    });
    if (!statistic) {
      throw new Error();
    }
    return statistic.length;
  } catch (err) {
    logger.error(err);
    throw new HttpError({
      message: 'Can not get statistic',
      status: 404,
    });
  }
};

export { getStatistic };
