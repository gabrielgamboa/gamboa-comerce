import { FastifyInstance } from "fastify";
import { productControllerFactory } from "../factories/product-controller-factory";

const productController = productControllerFactory()

export async function userRoutes (server: FastifyInstance) {
    server.post('/products', async (req, reply) => {
       const response = await productController.createProduct(req)
       reply.send(response).code(201)
    })
}