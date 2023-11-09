import { FastifyInstance } from "fastify";
import { productControllerFactory } from "../factories/product-controller-factory";

const productController = productControllerFactory()

export async function productRoutes (server: FastifyInstance) {
    server.post('/products', async (req, reply) => {
       const response = await productController.createProduct(req)
       reply.send(response).code(response.statusCode)
    })
}