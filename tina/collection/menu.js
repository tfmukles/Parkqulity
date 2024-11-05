const fields = [
  {
    type: "string",
    name: "name",
    label: "Name",
  },
  {
    type: "string",
    name: "url",
    label: "URL",
  },
]

const menuCollection = {
  name: "menu",
  label: "Menu",
  path: "src/config",
  format: "json",
  match: {
    include: "menu",
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
      label: "Main Menu",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
        },
      },
      fields: fields
    },
    {
      type: "object",
      name: "footer",
      label: "Footer Menu",
      fields: [
        {
          type: "object",
          name: "left",
          label: "Footer Left Menu",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
            },
          },
          fields: fields
        },
        {
          type: "object",
          name: "middle",
          label: "Footer Middle Menu",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
            },
          },
          fields: fields
        },
        {
          type: "object",
          name: "right",
          label: "Footer Right Menu",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
            },
          },
          fields: fields
        },
      ]
    },
    {
      type: "object",
      name: "footer_bottom",
      label: "Footer Bottom Menu",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1) };
        },
      },
      fields: fields
    },
  ]
}

export default menuCollection