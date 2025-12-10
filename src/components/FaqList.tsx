import FaqItem from "./FaqItem";
import data from "../data/data.ts";

import { useState } from "react";

type faqListT = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

type itemT = {
  id: number;
  question: string;
  answer: string;
};

export default function FaqList({ toggleDarkMode, darkMode }: faqListT) {
  const [expand, setExpand] = useState(false);

  function handleExpandingAll() {
    setExpand(!expand);
  }
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg-px3 py-12 ">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4 ">
        <h1 className="bg-linear-to-r capitalize text-3xl font-bold from-teal-600 via-teal-500  to-blue-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          frequently asked questions
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleExpandingAll}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 rounded-lg shadow-sm  hover:shadow-md hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors duration-300"
          >
            <i className={`bx bx-${expand ? "minimize" : "maximize"}`}></i>
            <p>Expand All</p>
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-gray-300 to-gray-200 
            dark:from-gray-700 dark:to-gray-800 
            cursor-pointer shadow-sm hover:shadow-md outline-none "
          >
            <i
              className={`bx bx-${darkMode ? "sun" : "moon"} dark:text-white`}
            ></i>
          </button>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-300">
        {data.map((item: itemT) => (
          <FaqItem
            setExpand={setExpand}
            expand={expand}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
