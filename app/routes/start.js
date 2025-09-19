module.exports = {
    method: 'GET',
    path: '/start',
    handler: {
      view: {
        template: 'start',
        context: { noIndex: false }
      }
    }
  }
  