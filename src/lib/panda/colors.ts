import { defineTokens } from "@pandacss/dev";

// default Panda colors: https://panda-css.com/docs/customization/theme#colors
const colors = defineTokens.colors({
  brand: {
    primary: {
      50: { value: "#f0f9fc" },
      100: { value: "#c2e6f4" },
      200: { value: "#8bcfeb" },
      300: { value: "#42b1de" },
      400: { value: "#1c9fd4", description: "Primary brand color" },
      500: { value: "#1886b3" },
      600: { value: "#147197" },
      700: { value: "#105b79" },
      800: { value: "#0e4d66" },
      900: { value: "#0a384a" },
    },
    secondary: {
      50: { value: "#f2fcf7" },
      100: { value: "#eafaf2" },
      200: { value: "#d5f5e6" },
      300: { value: "#c1f0da" },
      400: { value: "#acebce" },
      500: { value: "#83e1b5", description: "Secondary brand color" },
      600: { value: "#5ad79c" },
      700: { value: "#45d290" },
      800: { value: "#31cd84" },
      900: { value: "#28a369" },
    },
    tertiary: {
      50: { value: "#ffdddf" },
      100: { value: "#f8d7d9" },
      200: { value: "#f4c2c3" },
      300: { value: "#f0acae" },
      400: { value: "#ed9699" },
      500: { value: "#e56b6f", description: "Tertiary brand color" },
      600: { value: "#dd4045" },
      700: { value: "#da2a30" },
      800: { value: "#c72328" },
      900: { value: "#9c1b20" },
    },
    quaternary: {
      50: { value: "#fffbf7" },
      100: { value: "#faf6f2" },
      200: { value: "#f9f5f1" },
      300: { value: "#f2e9df" },
      400: { value: "#ebddcc" },
      500: { value: "#dcc4a8", description: "Quaternary brand color" },
      600: { value: "#cdab84" },
      700: { value: "#c69f71" },
      800: { value: "#bf935f" },
      900: { value: "#a87943" },
    },
  },
  neutral: {
    25: { value: "#fdfdfd" },
  },
  stone: {
    25: { value: "#fcfcfc" },
  },
  zinc: {
    25: { value: "#fcfcfc" },
  },
  gray: {
    25: { value: "#fcfcfd" },
  },
  slate: {
    25: { value: "#fcfcfd" },
  },
  grayPalette: {
    25: { value: "{colors.neutral.25}" },
    50: { value: "{colors.neutral.50}" },
    100: { value: "{colors.neutral.100}" },
    200: { value: "{colors.neutral.200}" },
    300: { value: "{colors.neutral.300}" },
    400: { value: "{colors.neutral.400}" },
    500: { value: "{colors.neutral.500}" },
    600: { value: "{colors.neutral.600}" },
    700: { value: "{colors.neutral.700}" },
    800: { value: "{colors.neutral.800}" },
    900: { value: "{colors.neutral.900}" },
    950: { value: "{colors.neutral.950}" },
  },
});

export default colors;
