import { CloseButton } from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg";

interface Props {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: Props) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Image representing the success sign" />
        <span className="text-xl mt-2 text-center">
          We appreciate your feedback and support, our team will be working to
          solve it as soon as possible.
        </span>

        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          New Feedback
        </button>
      </div>
    </>
  );
}
