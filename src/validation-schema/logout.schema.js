module.exports = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    },
    refreshToken: {
      type: 'string'
    }
  },
  required: [
    'accessToken',
    'refreshToken'
  ]
};