import Fastify, { FastifyInstance } from "fastify";
import { productRoutes } from "../routes";

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

        try {
            await fastifyServer.listen({ port: 3000 })
            console.log(`Server is running on port ${3000}`)
        } catch (err) {
            fastifyServer.log.error(err)
            process.exit(1)
        }
    }
}