import React from "react";
import style from "./tags.module.css";

const DropDownBtn = () => {
  return (
    <button
      id="dropdown-button"
      data-dropdown-toggle="dropdown"
      className={`bg-gray-100 ${style.dropdown_btn} dark:border-gray-700 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
      type="button"
    >
      All Tags
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default DropDownBtn;
