import moment from 'moment';

const getTimeFromPeriod = (period) => {
  switch (period) {
    case 'day':
      return new Date().setHours(0, 0, 0, 0);
    case '24h':
      return moment().subtract(1, 'days');
    case 'week':
      return moment().subtract(7, 'days');
    case 'month':
      return moment().subtract(30, 'days');
  }
};

export { getTimeFromPeriod };
