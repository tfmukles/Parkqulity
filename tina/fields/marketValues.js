const marketVlaue = {
  type: "object",
  name: "market_values",
  label: "Market Values",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "revenue_list",
      label: "Revenue List",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.estimated };
        },
        allowedActions: {
          create: false,
          delete: false,
        },
      },
      fields: [
        {
          type: "string",
          name: "estimated",
          label: "Estimated",
        },
        {
          type: "string",
          name: "prefix",
          label: "Prefix",
        },
        {
          type: "number",
          name: "revenue",
          label: "Revenue",
        },
        {
          type: "string",
          name: "suffix",
          label: "Suffix",
        },
        {
          type: "string",
          name: "unit",
          label: "Unit",
        },
      ]
    },
    {
      type: "object",
      name: "growth_list",
      label: "Growth List",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.estimated };
        },
        allowedActions: {
          create: false,
          delete: false,
        },
      },
      fields: [
        {
          type: "string",
          name: "prefix",
          label: "Prefix",
        },
        {
          type: "number",
          name: "revenue",
          label: "Revenue",
        },
        {
          type: "string",
          name: "suffix",
          label: "Suffix",
        },
        {
          type: "string",
          name: "unit",
          label: "Unit",
        },
        {
          type: "string",
          name: "estimated",
          label: "Estimated",
        },
      ]
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ]
}

export default marketVlaue;