import { Router } from "express";
import { CreateUserProvider } from "./views/CreateUserProvider";
import { CreateUser } from "./views/CreateUser";
import { DBUser } from "./models/DBUser";
import { MailtrapProvider } from "./providers/MailtrapProvider";

const router = Router();

const dbUser = new DBUser();
const mailtrapProvider = new MailtrapProvider();

const createUser = new CreateUser(dbUser, mailtrapProvider);

const createUserController = new CreateUserProvider(createUser);

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
