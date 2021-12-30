import mongoose, { Schema } from 'mongoose';

const statisticSchema = new Schema(
  {
    city: String,
    requests: [String],
  },
  { versionKey: false },
);

export const Statistic = mongoose.model(
  'Statistic',
  statisticSchema,
  'statistic',
);
