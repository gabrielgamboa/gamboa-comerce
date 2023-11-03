import { FastifyRequest } from "fastify";
import { CreateProductUseCase } from "../../application/usecases/create-product";
import { Product } from "../../domain/entities/Product";

export class ProductController {
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ) {}

    async createProduct(req: FastifyRequest) {
        const { title, description, price } = req.body as Product

        console.log({ title, description, price })

        return this.createProductUseCase.execute({
            id: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            title,
            description,
            price,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }
}