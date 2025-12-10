import { useEffect, useState } from "react";
import FaqList from "./components/FaqList";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-linear-to-r from-teal-600 via-teal-500 to-blue-600 inline-block text-transparent bg-clip-text font-Oswald capitalize ">
            "Exploring the Heart of Iranian Culture"
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto ">
            This quiz invites you to explore the depth and richness of Iranian
            culture—from ancient traditions and poetry to architecture, cuisine,
            and social customs. Each question encourages deeper understanding
            rather than simple facts, helping you appreciate the history and
            cultural identity that shape Iran today.
          </p>
        </header>
      </div>

      <FaqList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
