export class AlreadyExistsError extends Error {
    constructor (paramName: string) {
      super(`${paramName} already exists`)
      this.name = 'AlreadyExistsError'
    }
  }
  