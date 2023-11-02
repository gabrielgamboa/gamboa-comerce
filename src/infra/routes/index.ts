import { FastifyInstance } from "fastify";
import { productControllerFactory } from "../factories/product-controller-factory";

const productController = productControllerFactory()

export async function userRoutes (server: FastifyInstance) {
    server.get('/user', productController.createProduct)
}