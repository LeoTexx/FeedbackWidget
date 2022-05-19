import { MailAdapter, SendMailData } from "../mailAdapter";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0861e0b4132993",
    pass: "43a3705a1ec56a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Your Feedback Widget <support@feedbackwidget.com>",
      to: "Leonardo Teixeira <leo28tex@gmail.com>",
      subject,
      html: body,
    });
  }
}
