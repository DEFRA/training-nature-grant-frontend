const Joi = require('joi')

const schema = Joi.object({
  port: Joi.number().default(3000),
  env: Joi.string().valid('development', 'test', 'production').default('development'),
  cookiePassword: Joi.string().min(32).required(),
  cookieIsSecure: Joi.boolean().default(true)
})

const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  cookiePassword: 'thisisanexampleandmustbechangedforproduction',
  cookieIsSecure: true
}

// Validate config
const result = schema.validate(config, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

// Use the Joi validated value
const value = result.value

// Add some helper props
value.isDev = value.env === 'development'
value.isTest = value.env === 'test'
value.isProd = value.env === 'production'

value.serviceName = 'Apply for nature grant'
value.defaultPageTitle = `${value.serviceName} - GOV.UK`

module.exports = value
