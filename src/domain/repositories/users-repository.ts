import { User } from "../entities/User";

export interface UsersRepository {
  create(product: User): Promise<User>
}