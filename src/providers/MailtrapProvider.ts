import Mail from "nodemailer/lib/mailer";
import { Provider } from "../models/Provider";
import nodemailer from "nodemailer";
import { IMailProvider } from "../controllers/IMailProvider";

export class MailtrapProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: parseInt(process.env.PORT as string),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
  }

  async sendMail(message: Provider): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
