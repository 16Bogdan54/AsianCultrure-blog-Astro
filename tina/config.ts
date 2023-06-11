import { defineConfig, TinaField } from "tinacms";
import * as process from "process";

const CLIENT_ID: string | undefined = process.env.TINA_CLIENT_ID;
const TINA_TOKEN: string | undefined = process.env.TINA_TOKEN;

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
    value: "cooking",
    label: "Cooking",
  },
  {
    value: "history",
    label: "History",
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
    label: "Body",
    isBody: true,
  },
  {
    label: "Categories",
    name: "categories",
    type: "string",
    list: true,
    options: tags,
  },
];

export default defineConfig({
  branch,
  clientId: CLIENT_ID ?? "", // Get this from tina.io
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
        name: "Korean_Culture_Posts",
        label: "Korea",
        path: "src/content/posts/korea_posts",
        format: "md",
        fields: postFields,
      },
      {
        name: "Japanese_Culture_Posts",
        label: "Japan",
        path: "src/content/posts/japan_posts",
        format: "md",
        fields: postFields,
      },
      {
        name: "Chinese_Culture_Posts",
        label: "China",
        path: "src/content/posts/china_posts",
        format: "md",
        fields: postFields,
      },
    ],
  },
});
