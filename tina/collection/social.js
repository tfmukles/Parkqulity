const socialMenuCollection = {
  name: "social",
  label: "Social Links",
  path: "src/config",
  format: "json",
  match: {
    include: "social",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      name: "main",
      label: "Main Social",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ]
    },
  ]
}

export default socialMenuCollection