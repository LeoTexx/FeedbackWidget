import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export type FeedbackType = keyof typeof feedbackTypes;

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: bugImageUrl,
      alt: "Image of a bug",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Image of a lamp ",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "Image of a cloud",
    },
  },
};

export function WidgetForm() {
  const [selectedFeedbackType, setSelectedFeedbackType] =
    useState<FeedbackType | null>(null);
  const [isFeedbackSent, setIsFeedbackSent] = useState<boolean>(false);

  function handleRestartFeedback() {
    setIsFeedbackSent(false);
    setSelectedFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!selectedFeedbackType ? (
            <FeedbackTypeStep
              handleSelectedFeedbackType={setSelectedFeedbackType}
            />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={selectedFeedbackType}
              onFeedbackSent={() => setIsFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Powered by{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/LeoTexx"
        >
          LeoTexx
        </a>
      </footer>
    </div>
  );
}
