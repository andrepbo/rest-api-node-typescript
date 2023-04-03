import { IMailProvider } from "../controllers/IMailProvider";
import { IUser, IUserRepo } from "../controllers/IUser";
import { Provider } from "../models/Provider";
import { User } from "../models/User";

export class CreateUser {
  constructor(
    private userRepo: IUserRepo,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: IUser) {
    const userAlreadyExists = await this.userRepo.findUserByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.userRepo.createUser(user);

    const emailStructure = new Provider({
      to: { name: data.name, email: data.email },
      from: { name: "App team", email: "team@app.com" },
      subject: "Welcome to the app",
      body: "<p>Registration complete! You can login.</p>",
    });

    await this.mailProvider.sendMail(emailStructure);
  }
}
