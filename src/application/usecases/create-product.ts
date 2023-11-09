import { randomUUID } from "crypto";
import { CreateProduct } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/product-repository";
import { MissingParamError } from "../../shared/errors/missing-param-error";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) {}

  async execute(data: CreateProduct) {
    if (!data.title) throw new MissingParamError('title');
    
    const product = await this.productRepository.create({
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return product
  }
}