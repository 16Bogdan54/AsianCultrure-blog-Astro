import type { ChangeEvent } from "react";
import useFilter from "../../hooks/useFilter";
import BlogPost from "../blogpost/BlogPost";
import TagList from "../tagList/TagList";
import { getUniqueTags } from "../../utils/utils";
import SearchBar from "../searchBar/SearchBar";

import style from "./posts.module.css";

interface Props {
  title: string;
  searchList: any[];
}

const options = {
  keys: ["data.title", "description", "slug"],
  includeMatches: true,
  minMatchCharLength: 1,
  threshold: 0.5,
};

const Posts = ({ title, searchList }: Props) => {
  const [query, setQuery, posts, selectedTags, setSelectedTags] = useFilter(
    searchList,
    options
  );

  const handleOnSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuery(value);
  };

  const handleTagsSelect = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = target;

    if (checked) {
      setSelectedTags((prevTags) => [...prevTags, value]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== value));
      // @ts-ignore
      setPosts(searchList);
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.title}>{title}</h2>
        <div className="flex-grow">
          <div className="flex">
            <TagList
              tags={getUniqueTags(posts)}
              handleFunction={handleTagsSelect}
            />
            <SearchBar query={query} handler={handleOnSearch} />
          </div>
          {query.length > 1 && (
            <p>
              Found {posts.length} {posts.length === 1 ? "result" : "results"}{" "}
              for '{query}'
            </p>
          )}
        </div>
      </div>

      <ul className={style.posts}>
        {posts.map((post, index) => (
          <li key={index}>
            <BlogPost url={`/posts/${post.slug}`} postData={post.data} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
