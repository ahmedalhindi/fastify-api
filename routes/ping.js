// our-first-route.js

async function routes(fastify, options) {
  // Declare a route
  fastify.get("/ping", async (request, reply) => {
    return { ping: "pong" }
  })
}

module.exports = routes
