import { useState, useEffect } from "react";
import Fuse from "fuse.js";

//@ts-ignore
const useFilter = (searchList, options) => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const fuse = new Fuse(searchList, options);

  useEffect(() => {
    let filteredPosts = query
      ? fuse
          .search(query)
          .map((res) => res.item)
          .slice(0, 5)
      : searchList;

    if (selectedTags.length !== 0) {
      //@ts-ignore
      const filterPosts = (posts, selectedTags) => {
        //@ts-ignore
        return posts.filter((post) => {
          const { tags } = post.data;
          //@ts-ignore
          return tags.some((tag) => selectedTags.includes(tag));
        });
      };

      filteredPosts = filterPosts(searchList, selectedTags);
    }

    setPosts(filteredPosts);
  }, [query, selectedTags, searchList, fuse]);

  return [query, setQuery, posts, selectedTags, setSelectedTags];
};

export default useFilter;
