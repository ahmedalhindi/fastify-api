// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Register route
// ping route
fastify.register(require('./routes/ping'))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()