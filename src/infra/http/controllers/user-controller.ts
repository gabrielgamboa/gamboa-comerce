import { CreateUserUseCase } from "../../../application/usecases/user/create-user";
import { HttpRequest, HttpResponse } from "../../helpers";

export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase
    ) {}

    async createUser(req: HttpRequest): Promise<HttpResponse> {
        const data = await this.createUserUseCase.execute(req.body)

        return {
            statusCode: 200,
            data
        };
    }
}