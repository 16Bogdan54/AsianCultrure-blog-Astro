import {defineCollection} from "astro:content";

const blogCollection = defineCollection({
    directoryPath: './posts',
    pattern: '*.md',
    sortBy: 'date'
})

export const collection = {
    'blog': blogCollection
}