import { Provider } from "../models/Provider";

export interface IMailProvider {
  sendMail(message: Provider): Promise<void>;
}
