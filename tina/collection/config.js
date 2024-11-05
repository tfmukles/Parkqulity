
const configCollection = {
  name: "configuration",
  label: "Configuration",
  path: "src/config",
  format: "json",
  match: {
    include: "config",
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
      name: "site",
      label: "Site Config",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "base_url",
          label: "Base URL",
        },
        {
          type: "string",
          name: "base_path",
          label: "Base Path",
        },
        {
          type: "boolean",
          name: "trailing_slash",
          label: "Trailing Slash",
        },
        {
          type: "string",
          name: "favicon",
          label: "Favicon",
        },
        {
          type: "string",
          name: "logo",
          label: "Logo",
        },
        {
          type: "string",
          name: "logo_width",
          label: "Logo Width",
        },
        {
          type: "string",
          name: "logo_height",
          label: "Logo Height",
        },
        {
          type: "string",
          name: "logo_text",
          label: "Logo Text",
        },
      ]
    },
    {
      type: "object",
      name: "settings",
      label: "Header",
      fields: [
        {
          type: "boolean",
          name: "sticky_header",
          label: "Sticky Header",
        },
      ]
    },
    {
      type: "object",
      name: "params",
      label: "Params",
      fields: [
        {
          type: "string",
          name: "contact_form_action",
          label: "Contact Form Action",
        },
        {
          type: "string",
          name: "copyright",
          label: "Copyright",
        },
      ]
    },
    {
      type: "object",
      name: "navigation_button",
      label: "Navigation Button",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
        },
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ]
    },
    {
      type: "object",
      name: "metadata",
      label: "Meta Data",
      fields: [
        {
          type: "boolean",
          name: "meta_author",
          label: "Author",
        },
        {
          type: "image",
          name: "meta_image",
          label: "Image",
        },
        {
          type: "string",
          name: "meta_description",
          label: "Description",
        },
      ]
    },
  ],
}

export default configCollection