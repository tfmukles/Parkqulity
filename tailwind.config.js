const theme = require("./src/config/theme.json");

let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "scrolled",
    {
      pattern: /^swiper-/,
    },
  ],

  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        gray: theme.colors.default.text_color.gray,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        "theme-light": theme.colors.default.theme_color.theme_light,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(90deg, ${theme.colors.default.theme_color.secondary} 0%, ${theme.colors.default.theme_color.primary} 100%)`,
        "gradient-secondary": `linear-gradient(270deg, #000 0%, #151515 50.65%, #000 100%)`,
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
      },
      fontSize: {
        base: theme.colors.default.font_size.base + "px",
        h1: theme.colors.default.font_size.h1 + "rem",
        "h1-sm": theme.colors.default.font_size.h1 * 0.8 + "rem",
        h2: theme.colors.default.font_size.h2 + "rem",
        "h2-sm": theme.colors.default.font_size.h2 * 0.8 + "rem",
        h3: theme.colors.default.font_size.h3 + "rem",
        "h3-sm": theme.colors.default.font_size.h3 * 0.8 + "rem",
        h4: theme.colors.default.font_size.h4 + "rem",
        h5: theme.colors.default.font_size.h5 + "rem",
        h6: theme.colors.default.font_size.h6 + "rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        0: "0rem",
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
        6: "4.5rem",
      },
    }),
  ],
};
