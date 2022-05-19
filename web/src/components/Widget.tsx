import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute right-4 bottom-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 flex items-center text-white group">
        <ChatTeardropDots className="w-6 h-6  " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-600 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
