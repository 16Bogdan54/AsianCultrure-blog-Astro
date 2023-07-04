import React, { ChangeEvent, useEffect, useState } from "react";
import BlogPost from "../blogpost/BlogPost";
import TagList from "../tagList/TagList";
import Fuse from "fuse.js";
import { getUniqueTags } from "../../utils/utils";

interface Props {
  title: string;
  // tags: string[];
  searchList: any[];
}

const options = {
  keys: ["data.title", "description", "slug"],
  includeMatches: true,
  minMatchCharLength: 1,
  threshold: 0.5,
};

const TopPanel = ({ title, searchList }: Props) => {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  let posts: any[] = [];

  useEffect(() => {
    posts = query
      ? fuse
          .search(query)
          .map((res) => res.item)
          .slice(0, 5)
      : searchList;
  }, []);

  const handleOnSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuery(value);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 grow mb-6 rounded-md">
        <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
          {title}
        </h2>
        <div className="flex-grow">
          <div className="flex">
            <TagList tags={getUniqueTags(posts)} />
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary"
                placeholder="Search"
                value={query}
                onChange={handleOnSearch}
              />
              <div className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border">
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
          </div>

          {query.length > 1 && (
            <p>
              Found {posts.length} {posts.length === 1 ? "result" : "results"}{" "}
              for '{query}'
            </p>
          )}
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <li key={index}>
            <BlogPost url={`/posts/${post.slug}`} postData={post.data} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopPanel;
