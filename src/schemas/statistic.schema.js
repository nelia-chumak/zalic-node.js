const statisticSchema = {
  params: {
    type: 'object',
    properties: {
      city: { type: 'string' },
      period: { type: 'string', enum: ['day', '2h', 'week', 'month'] },
    },
    required: ['city', 'period'],
  },
  response: 200,
};

export { statisticSchema };
