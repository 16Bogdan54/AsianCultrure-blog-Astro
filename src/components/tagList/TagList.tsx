import type { ChangeEventHandler } from "react";
import DropDownBtn from "./DropDownBtn";
import TagListItem from "./TagListItem";

import style from "./tags.module.css";

interface Props {
  tags: string[];
  handleFunction: ChangeEventHandler;
}

const TagList = ({ tags, handleFunction }: Props) => {
  return (
    <>
      <DropDownBtn />
      <div
        id="dropdown"
        className={`${style.dropdown_list} hidden dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button"
        >
          {tags.map((tag: string, i: number) => (
            <li
              className={`${style.tag_li_wrapper} dark:border-gray-600`}
              key={i}
            >
              <TagListItem tag={tag} handleFunction={handleFunction} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TagList;
