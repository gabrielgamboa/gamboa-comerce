import { randomUUID } from "crypto";
import { CreateProduct } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/products-repository";
import { BusinessError } from "../../shared/errors/business-error";
import { MissingParamError } from "../../shared/errors";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) {}

  async execute(data: CreateProduct) {
    if (!data.title) throw new MissingParamError('title')

    const productAlreadyExists = await this.productRepository.findByTitle(data.title);
    if (productAlreadyExists) throw new BusinessError('Product already exists')

    const product = await this.productRepository.create({
      ...data,
      id: randomUUID(),
    })
    return product
  }
}