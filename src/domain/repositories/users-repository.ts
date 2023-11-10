import { User } from "../entities/User";

export interface UsersRepository {
  create(product: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
}