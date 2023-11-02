import Fastify, { FastifyInstance } from 'fastify'
import { userRoutes } from './infra/routes'

const fastifyServer: FastifyInstance = Fastify({
    logger: true,
})


fastifyServer.register(userRoutes)

const start = async () => {
  try {
    await fastifyServer.listen({ port: 3000 })
    console.log(`Server is running on port ${3000}`)
  } catch (err) {
    fastifyServer.log.error(err)
    process.exit(1)
  }
}

start()