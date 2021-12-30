import mongoose, { Schema } from 'mongoose';

const statisticSchema = new Schema(
  {
    city: String,
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

export const Statistic = mongoose.model(
  'Statistic',
  statisticSchema,
  'statistic',
);
