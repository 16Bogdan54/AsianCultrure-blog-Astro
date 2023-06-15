import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
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
    <Button onClick={handleClick} className="px-2 border-none outline-none">
      {localStorage.getItem("theme") === "light" ? (
        <IoMoon className="text-gray-500" />
      ) : (
        <IoSunny className="text-yellow-200" />
      )}
    </Button>
  );
};

export default ThemeToggle;
