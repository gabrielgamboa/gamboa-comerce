
export class MissingParamError extends Error {
  constructor (paramName: string, readonly statusCode = 400) {
      super(`Missing param: ${paramName}`)
      this.name = 'MissingParamError'
    }
  }
  