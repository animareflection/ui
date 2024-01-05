// based on Next.js PostCSS default: https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins
module.exports = {
  plugins: {
    "@pandacss/dev/postcss": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};
