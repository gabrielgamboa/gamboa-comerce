import { Product } from "../../../../domain/entities/Product";
import { ProductRepository } from "../../../../domain/repositories/product-repository";
import { prisma } from "../prisma-adapter";

export class ProductPrismaRepository implements ProductRepository {
  public usersRepository = prisma.product

  async create(product: Product): Promise<Product> {
    return this.usersRepository.create({
      data: product,
    })
  }
}