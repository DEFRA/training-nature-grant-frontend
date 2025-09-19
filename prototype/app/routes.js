//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/nature-v1/main-applicant', function (request, response) {
  console.log('IN MAIN-APPLICANT')
  console.log(request.session.data)

  response.redirect('/nature-v1/task-list')
})
