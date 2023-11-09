import { Product } from "../entities/Product";

export interface ProductRepository {
  create(product: Product): Promise<Product>
  findByTitle(title: string): Promise<Product | null>
}