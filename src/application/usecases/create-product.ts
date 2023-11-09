import { randomUUID } from "crypto";
import { CreateProduct } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/products-repository";
import { AlreadyExistsError, MissingParamError } from "../../shared/errors";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) {}

  async execute(data: CreateProduct) {
    const productAlreadyExists = await this.productRepository.findByTitle(data.title);
    if (productAlreadyExists) throw new AlreadyExistsError('Product')

    const product = await this.productRepository.create({
      ...data,
      id: randomUUID(),
    })
    return product
  }
}