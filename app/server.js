const config = require('./config')
const hapi = require('@hapi/hapi')

async function createServer () {
  // Create the hapi server
  const server = hapi.server({
    port: config.port,
    routes: {
      security: true,
      validate: {
        options: {
          abortEarly: false,
          stripUnknown: true,
          errors: {
            wrap: {
              label: false,
              array: false
            }
          }
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  // Register the plugins
  await server.register(require('@hapi/inert')) 
  await server.register(require('./plugins/views'))
  // await server.register(require('./plugins/session-cache'))
  await server.register(require('./plugins/router'))
  await server.register(require('./plugins/error-pages'))
  await server.register(require('./plugins/crumb'))

  return server
}

module.exports = createServer
