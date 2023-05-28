import { defineConfig } from "tinacms";
import * as process from "process";

const CLIENT_ID: string | undefined = process.env.TINA_CLIENT_ID;
const TINA_TOKEN: string | undefined = process.env.TINA_TOKEN;


// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

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
        name: "post",
        label: "Posts",
        path: "src/content",
        format: 'md',
        fields: [
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
        ],
      },
    ],
  },
});
