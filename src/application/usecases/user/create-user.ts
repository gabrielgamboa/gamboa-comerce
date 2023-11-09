import { randomUUID } from "crypto";
import { CreateUserDTO } from "../../../domain/dtos/user-dto";
import { UsersRepository } from "../../../domain/repositories/users-repository";
import { User } from "../../../domain/entities/User";

export class CreateProductUseCase {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
        id: randomUUID(),
        ...data
    })

    return user
  }
}