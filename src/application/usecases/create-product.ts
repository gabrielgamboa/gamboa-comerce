import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/product-repository";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) {}

  async execute(data: Product) {
    const product = await this.productRepository.create(data)
    return product
  }
}