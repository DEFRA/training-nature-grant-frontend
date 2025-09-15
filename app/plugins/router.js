const routes = [].concat(
  require('../routes/home'),
  require('../routes/static'),
  require('../routes/test'),
  require('../routes/start'),
  require('../routes/listpage')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
