import React, { useEffect, useState } from "react";
import moon from "../../../public/ui/moon.svg";
import sun from "../../../public/ui/sun.svg";
import { Button } from "flowbite-react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      onClick={handleClick}
      className="px-2 border-none outline-none text-gray-600 dark:text-gray-200"
    >
      {localStorage.getItem("theme") === "light" ? (
        <img src={moon} alt="moon" />
      ) : (
        <img src={sun} alt="moon" />
      )}
    </Button>
  );
};

export default ThemeToggle;
