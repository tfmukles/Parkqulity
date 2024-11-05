const keyFeatures = {
  type: "object",
  name: "key_features",
  label: "Key Features",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "list",
      label: "Key Features List",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title.replace("<br />", "") };
        }
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        // {
        //   type: "object",
        //   name: "features",
        //   label: "Features",
        //   list: true,
        // }
      ]
    },
  ]
}

export default keyFeatures;