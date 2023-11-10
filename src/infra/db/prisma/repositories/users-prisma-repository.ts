import { User } from "../../../../domain/entities/User";
import { UsersRepository } from "../../../../domain/repositories/users-repository";
import { prisma } from "../prisma-adapter";

export class UserPrismaRepository implements UsersRepository {
  public usersRepository = prisma.user

  async create(user: User): Promise<User> {
    return this.usersRepository.create({
      data: user,
    })
  }

  async findByEmail(email: string): Promise<User | null > {
    const user = await this.usersRepository.findFirst({
        where: { email }
    })

    return user;
  }
}