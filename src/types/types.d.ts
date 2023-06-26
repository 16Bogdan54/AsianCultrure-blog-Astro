export type Post = {
    heroImage?: string | undefined,
    title: string,
    pubDate: Date,
    category: string | undefined,
    tags: string[],
    sourceLink?: string
}