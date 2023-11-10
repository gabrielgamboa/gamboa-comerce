import { FastifyInstance } from "fastify"
import { productRoutes } from "../routes"
import { userRoutes } from "../routes/user.routes"

export const registerAllRoutes = (fastifyServer: FastifyInstance ) => {
    fastifyServer.register(productRoutes)
    fastifyServer.register(userRoutes)
}