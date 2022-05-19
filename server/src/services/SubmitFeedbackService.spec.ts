import { SubmitFeedbackService } from "./SubmitFeedbackService";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Test comment",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not allow submitting feedback with wrong image format", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Test comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
