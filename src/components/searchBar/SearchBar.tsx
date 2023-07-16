import type { ChangeEventHandler } from "react";
import style from "./search.module.css";

interface Props {
  query: string;
  handler: ChangeEventHandler;
}

const SearchBar = ({ query, handler }: Props) => {
  return (
    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className={`${style.search_input} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary`}
        placeholder="Search"
        value={query}
        onChange={handler}
      />
      <div className={`${style.icon_bg}`}>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
