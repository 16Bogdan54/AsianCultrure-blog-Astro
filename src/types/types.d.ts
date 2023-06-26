export interface Post {
    heroImage?: string;
    title: string;
    pubDate: Date;
    category: string;
    tags: string[];
    sourceLink?: string;
}