module.exports = [{
  method: 'GET',
  path: '/applicant-details',
  handler: (request, h) => {
    return h.view('applicant-details.html')
  }
},
{
  method: 'POST',
  path: '/applicant-details',
  handler: (request, h) => {
    return h.redirect('/applicant-details')
  }
}]
