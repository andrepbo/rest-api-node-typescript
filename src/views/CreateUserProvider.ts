import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserProvider {
  constructor(private createUser: CreateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.createUser.execute(request.body);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }

    return response.status(201).send();
  }
}
