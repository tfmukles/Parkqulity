const banner = {
  type: "object",
  name: "banner",
  label: "Banner",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      type: "rich-text",
    },
    {
      type: "string",
      name: "video_id",
      label: "Youtube Video ID",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ],
};

export default banner;
