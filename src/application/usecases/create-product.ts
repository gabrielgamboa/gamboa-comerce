import { randomUUID } from "crypto";
import { CreateProduct, Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/product-repository";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) {}

  async execute(data: CreateProduct) {
    const product = await this.productRepository.create({
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return product
  }
}