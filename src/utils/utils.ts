export const convertDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getUniqueTags = (blogPosts: any): string[] => {
  return Array.from(
    blogPosts.reduce((tagSet: any, post: any) => {
      const tags: string[] = post.data.tags;

      if (tags) tags.forEach((tag: string) => tagSet.add(tag));

      return tagSet;
    }, new Set())
  );
};
