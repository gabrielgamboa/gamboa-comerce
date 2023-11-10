import Fastify, { FastifyInstance } from "fastify";
import { errorHandler } from "../middlewares/error-handler";
import { registerAllRoutes } from "./register-routes";

export class Server {
    fastifyServer: FastifyInstance | undefined

    constructor() {
        this.startServer();
    }

    private async startServer() {
        const fastifyServer: FastifyInstance = Fastify({
            logger: true,
        })


        registerAllRoutes(fastifyServer)
        
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