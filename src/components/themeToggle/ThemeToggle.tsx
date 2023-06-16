import React, { useEffect, useState } from "react";
import moon from "../../../public/ui/moon.svg";
import sun from "../../../public/ui/sun.svg";
import { Button } from "flowbite-react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("");

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ?? "light");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const currentTheme = theme === "light" ? moon : sun;
  const altText = theme === "light" ? "moon" : "sun";

  return (
    <Button
      onClick={toggleTheme}
      className="px-2 border-none outline-none text-gray-600 dark:text-gray-200"
    >
      <img className="w-6 h-6" src={currentTheme} alt={altText} />
    </Button>
  );
};

export default ThemeToggle;
