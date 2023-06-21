import { defineConfig, TinaField } from "tinacms";
import * as process from "process";

const TINA_CLIENT = process.env.TINA_CLIENT;
const TINA_TOKEN = process.env.TINA_TOKEN;

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

type Tag = {
  value: string;
  label: string;
};

const tags: Tag[] = [
  {
    value: "culture",
    label: "Culture",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "languages",
    label: "Languages",
  },
  {
    value: "cooking",
    label: "Cooking",
  },
];

const postFields: TinaField[] = [
  {
    type: "image",
    name: "heroImage",
    label: "Hero Image",
  },
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "pubDate",
    label: "Date Posted",
    required: true,
  },
  {
    type: "rich-text",
    name: "body",
    label: "Post Body",
    isBody: true,
    required: true,
  },
  {
    label: "Category",
    name: "category",
    type: "string",
    list: false,
    options: tags,
  },
  {
    label: "Source link",
    name: "sourceLink",
    type: "string",
    description:
      "In case if you use information from other resourses, than insert source link",
  },
  {
    label: "Tags",
    name: "tags",
    type: "string",
    description: "Add tags, for describing what your post is about.",
    list: true,
    ui: {
      component: "tags",
    },
  },
];

export default defineConfig({
  branch,
  clientId: TINA_CLIENT ?? "", // Get this from tina.io
  token: TINA_TOKEN ?? "", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Blog Posts",
        path: "src/content/posts",
        format: "md",
        fields: postFields,
      },
    ],
  },
});
