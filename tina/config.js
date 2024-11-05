import { defineConfig } from "tinacms";
import configCollection from "./collection/config";
import menuCollection from "./collection/menu";
import socialMenuCollection from "./collection/social";
import about from "./fields/about";
import backedBy from "./fields/backedBy";
import banner from "./fields/banner";
import brands from "./fields/brands";
import faq from "./fields/faq";
import features from "./fields/features";
import howItWorks from "./fields/howItWorks";
import keyFeatures from "./fields/keyFeatures";
import marketValues from "./fields/marketValues";
import productDemo from "./fields/productDemo";
import scheduleMeeting from "./fields/scheduleMeeting";
import weServe from "./fields/weServe";
import whatTheyAreSaying from "./fields/whatTheyAreSaying";
import whyUs from "./fields/whyUs";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Homepage",
        path: "src/content",
        format: "md",
        match: {
          include: "_index",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          banner,
          brands,
          features,
          weServe,
          howItWorks,
          productDemo,
          keyFeatures,
          whyUs,
          whatTheyAreSaying,
          marketValues,
          scheduleMeeting,
          about,
          backedBy,
          faq,
        ],
      },
      configCollection,
      menuCollection,
      socialMenuCollection,
    ],
  },
});
