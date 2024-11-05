const about = {
  type: "object",
  name: "about",
  label: "About",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "profiles_list",
      label: "Profiles List",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name };
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
          label: "Image",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "designation",
          label: "Designation",
        },
        {
          type: "string",
          name: "location",
          label: "Location",
        },
        {
          type: "string",
          name: "desc",
          label: "Description",
        },
        {
          type: "object",
          name: "social",
          label: "Social",
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "string",
              name: "link",
              label: "Link",
            },
          ]
        },
      ]
    },
  ]
}

export default about;