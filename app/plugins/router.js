const routes = [].concat(
  require('../routes/home'),
  require('../routes/start'),
  require('../routes/task-list'),
  require('../routes/example'),
  require('../routes/static'),
  require('../routes/applicant-details')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
