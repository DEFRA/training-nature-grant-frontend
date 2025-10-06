module.exports = [{
  method: 'GET',
  path: '/task-list',
  handler: (request, h) => {
    const firstName = request.yar.get('firstName')
    const familyName = request.yar.get('familyName')
    const email = request.yar.get('email')
    const status = (firstName && familyName && email) ? 'Complete' : 'InComplete'
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
