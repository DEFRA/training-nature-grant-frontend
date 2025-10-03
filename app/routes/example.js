const Joi = require('joi')

module.exports = [
  {
    method: 'GET',
    path: '/example',
    handler: (request, h) => {
      const inputValue = request.yar.get('input-value')
      return h.view('example.html', { inputValue })
    }
  },
  {
    method: 'POST',
    path: '/example',
    handler: (request, h) => {
      const { inputValue } = request.payload
      request.yar.set('input-value', inputValue)
      return h.redirect('/task-list')
    },
    options: {
      validate: {
        payload: Joi.object({
          inputValue: Joi.string().min(1).max(20)
        }),
        failAction: async (request, h, error) => {
          return h.view('example.html', {
            ...request.payload,
            errorMessage: { text: 'Must be string between 1 and 20 characters' }
          }).code(400).takeover()
        }
      }
    }
  }
]
