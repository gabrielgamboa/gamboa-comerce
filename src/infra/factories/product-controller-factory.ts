import { CreateProductUseCase } from "../../application/usecases/create-product"
import { ProductController } from "../controllers/product-controller"
import { ProductPrismaRepository } from "../db/prisma/repositories/product-prisma-repository"

export const productControllerFactory = () => {
  const productRepository = new ProductPrismaRepository()
  
  const createProductUseCase = new CreateProductUseCase(productRepository)
  
  return new ProductController(createProductUseCase)
}