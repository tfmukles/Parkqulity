const productDemo = {
  type: "object",
  name: "product_demo",
  label: "Product Demo",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "video_id",
      label: "Video ID",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Image Alt text",
    },
  ]
}

export default productDemo;