import { User } from "../models/User";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepo {
  findUserByEmail(email: string): Promise<User>;
  createUser(user: User): Promise<void>;
}
