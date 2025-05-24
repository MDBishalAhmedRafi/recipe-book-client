// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// import { createContext, useContext, useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState(() =>
//     localStorage.getItem("theme") ||
//     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const ToggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <button onClick={ToggleTheme} className="btn btn-ghost text-xl">
//       {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
//     </button>
//   );
// }

// const ThemeContext = createContext ('light');

// export const ThemeProvider = ({children}) => {
//   const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
//   useEffect(() => {
//     if(darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem("theme", "dark");
//     }
//     else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode])
//   return (
//     <ThemeContext.Provider value={{darkMode, setDarkMode}}> {children}</ThemeContext.Provider>
//   )
// }
// export const useDarkMode = () => useContext(ThemeContext)

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPeferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPeferDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === 'dark' ? (<span className="text-yellow-300 text-xl"> <FaSun></FaSun> </span>) : (<span className="text-gray-700 text-xl"> <FaMoon></FaMoon> </span>)}
      </button>
    </div>
  );
};

export default ToggleTheme;


