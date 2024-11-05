const features = {
  type: "object",
  name: "features",
  label: "Features",
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
      name: "testimonial",
      label: "Testimonial",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "desc",
          label: "Desc",
        },
        {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            {
              type: "image",
              name: "src",
              label: "Src",
            },
            {
              type: "string",
              name: "alt",
              label: "Alt",
            },
          ]
        },
        {
          type: "object",
          name: "list",
          label: "List",
          fields: [
            {
              type: "string",
              name: "label",
              label: "Label",
            },
          ]
        },
      ]
    },
    {
      type: "object",
      name: "slider",
      label: "Slider",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.label };
        },
        allowedActions: {
          create: false,
          delete: false,
        },
      },
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
        {
          type: "object",
          name: "tab_content",
          label: "Tab Content",
          ui: {
            itemProps: (item) => {
              return { label: item?.name };
            }
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
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "subtitle",
              label: "Subtitle",
            },
            {
              type: "object",
              name: "feature",
              label: "Feature",
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                },
                {
                  type: "string",
                  name: "list",
                  label: "List",
                  list: true,
                }
              ]
            },
          ]
        },
      ]
    },
  ]
}

export default features;