import React, { ChangeEvent, useEffect, useState } from "react";
import BlogPost from "../blogpost/BlogPost";
import TagList from "../tagList/TagList";
import Fuse from "fuse.js";
import { getUniqueTags } from "../../utils/utils";
import SearchBar from "../searchBar/SearchBar";
import { post } from "axios";

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

const TopPanel = ({ title, searchList }: Props) => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fuse = new Fuse(searchList, options);

  useEffect(() => {
    let posts = query
      ? fuse
          .search(query)
          .map((res) => res.item)
          .slice(0, 5)
      : searchList;

    // // @ts-ignore
    // setPosts(posts);

    if (selectedTags.length !== 0) {
      function filterPosts(posts: any[], selectedTags: string[]) {
        console.log(posts);
        return posts.filter((post) => {
          const { tags } = post.data;
          return tags.some((tag: string) => selectedTags.includes(tag));
        });
      }

      posts = filterPosts(searchList, selectedTags);

      // posts = searchList.filter((post) => {
      //   return post.data.tags.filter((tag: string) => {
      //     return selectedTags.some((selectedTag) => tag.includes(selectedTag));
      //   });
      // });
    }

    // @ts-ignore
    setPosts(posts);
  }, [query, selectedTags]);

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
      console.log("posts", searchList);
      // @ts-ignore
      setPosts(searchList);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 grow mb-6 rounded-md">
        <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
          {title}
        </h2>
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
