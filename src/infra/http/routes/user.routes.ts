import { FastifyInstance } from "fastify";
import { userControllerFactory } from "../../factories/user-controller-factory";

const userController = userControllerFactory()

export async function userRoutes (server: FastifyInstance) {
    server.post('/users', async (req, reply) => {
       const response = await userController.createUser(req)
       reply.send(response).code(response.statusCode)
    })
}