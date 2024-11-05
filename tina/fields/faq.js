const faq = {
  type: "object",
  name: "faq",
  label: "FAQ",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      component: 'textarea',
      name: "desc",
      label: "Description",
    },
    {
      type: "object",
      name: "questions",
      label: "Questions",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.question };
        },
      },
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
        },
        {
          type: "string",
          component: 'textarea',
          name: "answer",
          label: "Answer",
        },
      ],
    },
  ]
}

export default faq;