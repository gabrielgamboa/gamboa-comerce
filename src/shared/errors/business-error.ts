export class BusinessError extends Error {
    constructor (paramName: string, readonly statusCode = 400) {
      super(`${paramName} already exists`)
      this.name = 'AlreadyExistsError'
    }
  }
