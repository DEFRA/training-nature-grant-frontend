function getApplicantStatus (request) {
  const firstName = request.yar.get('firstName')
  const familyName = request.yar.get('familyName')
  const email = request.yar.get('email')

  const applicantstatus = firstName && familyName && email
  const status = {
    applicantDetails: applicantstatus
  }
  return status
}

module.exports = [{
  method: 'GET',
  path: '/task-list',
  handler: (request, h) => {
    const status = getApplicantStatus(request)
    return h.view('task-list.html', { status })
  }
},
{
  method: 'POST',
  path: '/task-list',
  handler: (request, h) => {
    return h.redirect('/task-list')
  }
}]
