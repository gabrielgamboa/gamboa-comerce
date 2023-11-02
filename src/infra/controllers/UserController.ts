import { FastifyRequest } from "fastify";

export class UserController {
    constructor() {}

    async getUsers(req: FastifyRequest): Promise<any> {
        return [{
            id: 1
        }]
    }
}