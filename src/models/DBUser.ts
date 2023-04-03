import { IUserRepo } from "../controllers/IUser";
import { User } from "./User";

export class DBUser implements IUserRepo {
  private users: User[] = [];

  async findUserByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async createUser(user: User): Promise<void> {
    this.users.push(user);
  }
}
