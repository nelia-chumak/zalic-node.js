import mongoose, { Schema } from 'mongoose';

import { EXPIRATION_PERIOD } from '../../constants';

const weatherSchema = new Schema(
  {
    coord: {
      lon: Number,
      lat: Number,
    },
    weather: [
      {
        id: Number,
        main: String,
        description: String,
        icon: String,
      },
    ],
    base: String,
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number,
    },
    visibility: Number,
    wind: {
      speed: Number,
      deg: Number,
      gust: Number,
    },
    clouds: {
      all: Number,
    },
    dt: Number,
    sys: {
      sys_type: Number,
      id: Number,
      country: String,
      sunrise: Number,
      sunset: Number,
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number,
    created_at: { type: Date, expires: EXPIRATION_PERIOD, default: Date.now },
  },
  { versionKey: false },
);

export const Weather = mongoose.model('Weather', weatherSchema, 'weather');
