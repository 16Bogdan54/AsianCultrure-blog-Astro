import type React from "react";
import useTheme from "../../hooks/useTheme";

import moon from "../../icons/moon.svg";
import sun from "../../icons/sun.svg";

import style from "./toggle.module.css";

const ThemeToggle: React.FC = () => {
  const [toggleTheme, theme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${style.theme_btn} dark:text-gray-200 `}
    >
      <img
        className="w-6 h-6"
        src={theme === "light" ? moon : sun}
        alt={theme.concat("-theme")}
      />
    </button>
  );
};

export default ThemeToggle;
