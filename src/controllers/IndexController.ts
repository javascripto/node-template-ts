import { Request, Response } from 'express'

class IndexController {
  index (request: Request, response: Response) {
    response.json({ message: 'Hello World' })
  }
}

export default new IndexController()
