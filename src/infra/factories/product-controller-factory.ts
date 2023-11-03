import { CreateProductUseCase } from "../../application/usecases/create-product"
import { ProductController } from "../controllers/product-controller"
import { ProductPrismaRepository } from "../db/prisma/repositories/product-prisma-repository"

export const productControllerFactory = (): ProductController => {
  const productRepository = new ProductPrismaRepository()
  
  const createProductUseCase = new CreateProductUseCase(productRepository)

  const productController = new ProductController(createProductUseCase)

  return productController
}