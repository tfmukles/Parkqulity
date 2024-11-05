const weServe = {
  type: "object",
  name: "we_serve",
  label: "Who We Serve",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ]
}

export default weServe;