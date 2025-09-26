module.exports = [
  {
    method: 'GET',
    path: '/example',
    handler: (request, h) => {
      const myValue = 'Hello from the route'
      return h.view('example.html', { myValue })
    }
  },
  {
    method: 'POST',
    path: '/example',
    handler: (request, h) => {
      return h.redirect('/start')
    }
  }
]
