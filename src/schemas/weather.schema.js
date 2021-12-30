const weatherSchema = {
  params: {
    type: 'object',
    properties: {
      city: { type: 'string' },
    },
    required: ['city'],
  },
  response: 200,
};

export { weatherSchema };
