import { FastifyRequest } from "fastify";
import { CreateProductUseCase } from "../../application/usecases/create-product";
import { CreateProduct, Product } from "../../domain/entities/Product";
import { randomUUID } from "crypto";
import { HttpResponse } from "../helpers";

export class ProductController {
    constructor(
        private readonly createProductUseCase: CreateProductUseCase
    ) {}

    async createProduct(req: FastifyRequest): Promise<HttpResponse> {
        const { title, description, price } = req.body as CreateProduct

        console.log({ title, description, price })

        const product = await this.createProductUseCase.execute({
            title,
            description,
            price,
        })

        return {
            statusCode: 201,
            data: product,
        }
    }
}