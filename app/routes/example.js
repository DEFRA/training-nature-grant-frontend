const Joi = require('joi')

const myCustomValidator = (value, helper) => {
  const { inputValue } = value

  if (inputValue.length < 1) {
    return helper.message('Input must be longer than 1 character')
  }

  if (inputValue.length > 20) {
    return helper.message('Input too long, maximum is 20 characters')
  }

  return true
}

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
        payload: Joi.custom(myCustomValidator),
        failAction: async (request, h, error) => {
          console.log(error)
          return h.view('example.html', {
            ...request.payload,
            errorMessage: { text: error.details[0].message }
          }).code(400).takeover()
        }
      }
    }
  }
]
