module.exports = {
  method: 'GET',
  path: '/start',
  handler: (request, h) => {
    request.yar.reset()
    return h.view('start.html')
  }
}
