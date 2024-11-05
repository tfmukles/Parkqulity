const whatTheyAreSaying = {
  type: "object",
  name: "opinion",
  label: "What they are saying / Opinions",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "lists",
      label: "Features",
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
          type: "image",
          name: "image",
          label: "Icon",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "desc",
          label: "Description",
          component: "textarea",
        },
      ],
    },
    {
      type: "image",
      name: "brands",
      label: "All Brands",
      list: true,
    },
  ],
};

export default whatTheyAreSaying;