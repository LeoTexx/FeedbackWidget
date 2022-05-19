import { MailAdapter } from "./../adapters/mailAdapter";
import { FeedbacksRepository } from "./../repositories/FeedbacksRepository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "New Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px;color: #111;"> `,
        `<p>Feedback Type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
