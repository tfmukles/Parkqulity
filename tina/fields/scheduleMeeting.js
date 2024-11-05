const scheduleMeeting = {
  type: "object",
  name: "schedule_meeting",
  label: "Schedule a Meeting",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "iframe_link",
      label: "Schedule a Meeting iFrame Link",
    },
    {
      type: "object",
      name: "button",
      label: "Schedule a Meeting Button",
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
      ]
    },
  ]
}

export default scheduleMeeting;