import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const ToggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={ToggleTheme} className="btn btn-ghost text-xl">
      {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
}
