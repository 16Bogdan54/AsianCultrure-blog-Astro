import React from "react";
import { convertDate } from "../../utils/utils";
import type { Post } from "../../types/types";

interface Props {
  url: string;
  postData: Post;
}

const BlogPost = ({ url, postData }: Props) => {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {postData.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {convertDate(postData.pubDate)}
      </p>
      <p>Category: {postData.category}</p>
      <div className="flex gap-6 flex-col sm:flex-row py-4">
        <a
          className="shadow flex-1 flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:shadow-xl focus:outline-none dark:hover:shadow-xl hover:-translate-y-2 dark:hover:-translate-y-2 transition ease-in-out delay-150"
          href={url}
        >
          <span className="mr-3">Read more</span>
          {/*<Icon name="arrow_right" class="w-6 h-6"/>*/}
        </a>
        <a
          className="flex-1 flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-text-light bg-secondary rounded-lg hover:shadow-xl focus:outline-none dark:hover:shadow-xl hover:-translate-y-2 dark:hover:-translate-y-2 transition ease-in-out delay-150"
          href={postData.sourceLink}
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
