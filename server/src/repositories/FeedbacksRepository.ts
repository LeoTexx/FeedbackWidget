export interface Feedback {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: Feedback) => Promise<void>;
}
