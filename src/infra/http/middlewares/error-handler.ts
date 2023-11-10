import { FastifyReply, FastifyRequest } from "fastify"
import { MissingParamError } from "../../../shared/errors"
import { BusinessError } from "../../../shared/errors/business-error"

const BAD_REQUEST = 500

export const errorHandler = (err: Error, request: FastifyRequest, reply: FastifyReply) => {
    if (err instanceof MissingParamError) {
        reply.code(err.statusCode).send(err)
    }

    if (err instanceof BusinessError) {
        reply.code(err.statusCode).send(err)
    }

    reply.code(BAD_REQUEST).send(err)
}