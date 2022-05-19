import { prisma } from "../../prisma";
import { Feedback, FeedbacksRepository } from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: Feedback) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
