import { randomUUID } from "crypto";
import { CreateUserDTO } from "../../../domain/dtos/user-dto";
import { UsersRepository } from "../../../domain/repositories/users-repository";
import { User } from "../../../domain/entities/User";
import { BusinessError } from "../../../shared/errors/business-error";
import { Encrypter } from "../../ports/encrypter";


export class CreateUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encrypter: Encrypter,
  ) {}

  async execute({ email, name, password }: CreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email)
    if (userExists) throw new BusinessError('User with this email already exists')

    const hashedPassword = await this.encrypter.encrypt(password)

    const user = await this.usersRepository.create({
        id: randomUUID(),
        email,
        name,
        password: hashedPassword
    })

    return user
  }
}