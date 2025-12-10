import { useState } from "react";

type itemT = {
  id: number;
  question: string;
  answer: string;
};

type faqItemT = {
  item: itemT;
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FaqItem({ item, expand, setExpand }: faqItemT) {
  const [selectedExpand, setSelectedExpand] = useState(false);

  function handleSelectedExpand() {
    setExpand(false);
    setSelectedExpand(!selectedExpand);
  }

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-linear-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent ">
      <button
        onClick={handleSelectedExpand}
        className="w-full py-5 px-4
       flex justify-between items-center text-left focus:outline-none rounded-lg transition-colors duration-200 cursor-pointer text-gray-900 dark:text-white hover:bg-clip-text hover:text-transparent bg-linear-to-r hover:from-indigo-600 hover:to-teal-600 dark:hover:from-indigo-400 dark:hover:to-teal-400 "
      >
        <span className="text-l font-medium ">{item.question}</span>
        <div className="flex shrink-0 items-center justify-center w-8 min-w-8 aspect-square  rounded-full bg-linear-to-r hover:from-teal-200 hover:to-indigo-300 dark:hover:from-teal-600 dark:hover:to-indigo-700 bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ">
          <i
            className={`bx bx-${
              expand || selectedExpand ? "minus" : "plus"
            } text-gray-500 dark:text-gray-400`}
          ></i>
        </div>
      </button>
      <div className="overflow-hidden ">
        {(expand || selectedExpand) && (
          <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300 ">
            <div className="text-sm p-3 rounded-lg max-h-[300px]">
              {item.answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
