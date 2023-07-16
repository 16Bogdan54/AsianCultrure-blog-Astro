import type { ChangeEventHandler } from "react";

import style from "./tags.module.css";

interface Props {
  tag: string;
  handleFunction: ChangeEventHandler;
}

const TagListItem = ({ tag, handleFunction }: Props) => {
  return (
    <div className="flex items-center pl-3">
      <input
        id={tag}
        type="checkbox"
        value={tag}
        onChange={handleFunction}
        className={`${style.tag_input} dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500`}
      />
      <label htmlFor={tag} className={`${style.tag_label} dark:text-gray-300`}>
        {tag}
      </label>
    </div>
  );
};

export default TagListItem;
