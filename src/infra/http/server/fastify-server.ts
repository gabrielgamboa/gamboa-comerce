import Fastify, { FastifyInstance } from "fastify";
import { productRoutes } from "../routes";
import { MissingParamError } from "../../../shared/errors/missing-param-error";
import { errorHandler } from "../middlewares/error-handler";

export class Server {
    fastifyServer: FastifyInstance | undefined

    constructor() {
        this.startServer();
    }

    private async startServer() {
        const fastifyServer: FastifyInstance = Fastify({
            logger: true,
        })
        
        fastifyServer.register(productRoutes)
        fastifyServer.setErrorHandler(errorHandler)

        try {
            await fastifyServer.listen({ port: 3000 })
            console.log(`Server is running on port ${3000}`)
        } catch (err) {
            fastifyServer.log.error(err)
            process.exit(1)
        }
    }
}