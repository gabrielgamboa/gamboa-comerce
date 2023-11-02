import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/UserController";

const userController = new UserController()

export async function userRoutes (server: FastifyInstance) {
    server.get('/user', userController.getUsers)
}