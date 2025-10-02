const Joi = require('joi')

module.exports = [
  {
    method: 'GET',
    path: '/example',
    handler: (request, h) => {
      const inputs = request.yar.get('input-values')
      return h.view('example.html', inputs)
    }
  },
  {
    method: 'POST',
    path: '/example',
    handler: (request, h) => {
      const inputs = request.payload
      request.yar.set('input-values', inputs)
      return h.redirect('/task-list')
    },
    options: {
      validate: {
        payload: Joi.object({
          inputValue: Joi.string().min(1).max(20),
          inputValue2: Joi.string().min(1).max(20)
        }),
        failAction: async (request, h, error) => {
          console.log(error.details[0])
          return h.view('example.html', {
            ...request.payload,
            errorMessage: {
              id: error.details[0].context.key,
              text: 'Must be string between 1 and 20 characters'
            }
          }).code(400).takeover()
        }
      }
    }
  }
]
