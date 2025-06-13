// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: {
      type: "string",
      required: true
    },
    avatar: {
      type: "string",
      required: true
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    date: { type: "date", required: true },
    author: {
      type: "nested",
      of: Author,
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".md", "")
    }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-C3BZLNXR.mjs.map
