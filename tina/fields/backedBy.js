const backedBy = {
  type: "object",
  name: "backed_by",
  label: "Backed By",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "images",
      label: "Images",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
        allowedActions: {
          create: false,
          delete: false,
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "src",
          label: "Image",
        },
      ]
    },
  ]
}

export default backedBy;