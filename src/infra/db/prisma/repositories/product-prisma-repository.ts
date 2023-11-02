import { Product } from "../../../../domain/entities/Product";
import { ProductRepository } from "../../../../domain/repositories/product-repository";

export class ProductPrismaRepository implements ProductRepository {
  constructor() {}
  
  async create(product: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}