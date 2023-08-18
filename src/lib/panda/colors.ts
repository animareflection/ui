import { defineTokens } from "@pandacss/dev";

// default Panda colors: https://panda-css.com/docs/customization/theme#colors
const colors = defineTokens.colors({
  brand: {
    primary: {
      50: { value: "#C7EAF8" },
      100: { value: "#B3E2F5" },
      200: { value: "#8AD2F0" },
      300: { value: "#62C3EA" },
      400: { value: "#39B3E5" },
      500: { value: "#1C9FD4", description: "Primary brand color" },
      600: { value: "#1781AB" },
      700: { value: "#116283" },
      800: { value: "#0C445A" },
      900: { value: "#072532" },
      950: { value: "#04161E" },
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
});

export default colors;
