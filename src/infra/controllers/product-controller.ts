import { FastifyRequest } from "fastify";
import { CreateProductUseCase } from "../../application/usecases/create-product";

export class ProductController {
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ) {}

    async createProduct(req: FastifyRequest): Promise<any> {
        return [{
            id: 1
        }]
    }
}