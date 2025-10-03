const Joi = require('joi')
module.exports = [{
  method: 'GET',
  path: '/applicant-details',
  handler: (request, h) => {
    const firstName = request.yar.get('firstName')
    const familyName = request.yar.get('familyName')
    const email = request.yar.get('email')
    return h.view('applicant-details.html', { firstName, familyName, email })
  }
},
{
  method: 'POST',
  path: '/applicant-details',
  handler: (request, h) => {
    const { firstName, familyName, email } = request.payload
    request.yar.set('firstName', firstName)
    request.yar.set('familyName', familyName)
    request.yar.set('email', email)
    return h.redirect('/task-list')
  },
  options: {
    validate: {
      payload: Joi.object({
        firstName: Joi.string().min(1).max(20),
        familyName: Joi.string().min(1).max(20),
        email: Joi.string().min(1).max(20)
      }),
      failAction: async (request, h, error) => {
        console.log(error.details)
        return h.view('applicant-details.html', {
          ...request.payload,
          errorMessage: {
            id: error.details[0].context.key,
            text: 'Must be string between 1 and 20 characters'
          }
        }).code(400).takeover()
      }
    }
  }
}]
