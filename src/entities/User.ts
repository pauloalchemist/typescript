import { randomUUID } from 'crypto'

class User {
  id: string
  name: string
  email: string

  constructor () {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}

export { User }
