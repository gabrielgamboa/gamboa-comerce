import { CreateUserUseCase } from "../../application/usecases/user/create-user"
import { UserPrismaRepository } from "../db/prisma/repositories/users-prisma-repository"
import { BcryptAdapter } from "../encrypter/bcrypt-adapter"
import { UserController } from "../http/controllers/user-controller"

const SALT = 8

export const userControllerFactory = (): UserController => {
  const userRepository = new UserPrismaRepository()
  
  const bcryptAdapter = new BcryptAdapter(SALT)

  const createUserUseCase = new CreateUserUseCase(
    userRepository,
    bcryptAdapter
  )

  const userController = new UserController(createUserUseCase)

  return userController
}