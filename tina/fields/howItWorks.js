const howItWorks = {
  type: "object",
  name: "how_it_works",
  label: "How It Works",
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
          name: "desc",
          label: "Description",
          component: "textarea",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ]
    },
    {
      type: "string",
      name: "iframe_link",
      label: "Schedule a Demo iFrame Link",
    },
    {
      type: "object",
      name: "button",
      label: "Schedule a Demo Button",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
        },
        {
          type: "string",
          name: "label",
          label: "Button Label",
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

export default howItWorks;