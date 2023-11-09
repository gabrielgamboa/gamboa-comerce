import { FastifyReply, FastifyRequest } from "fastify"
import { MissingParamError } from "../../../shared/errors"

export const errorHandler = (err: Error, request: FastifyRequest, reply: FastifyReply) => {
    if (err instanceof MissingParamError) {
        reply.code(400).send(err)
    }

    reply.code(500).send(err)
}