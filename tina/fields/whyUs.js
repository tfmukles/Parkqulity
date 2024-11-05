const whyUs = {
  type: "object",
  name: "why_us",
  label: "Why Us",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "lists",
      label: "Slider",
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
          type: "string",
          name: "content",
          label: "Content",
          component: "textarea",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ]
    },
  ]
}

export default whyUs;