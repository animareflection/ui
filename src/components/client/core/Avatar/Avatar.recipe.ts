import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
  className: "avatar",
  description: "The styles for the Avatar component",
  slots: ["root", "fallback", "image"],
  base: {
    root: {
      borderRadius: "full",
      borderWidth: "1px",
      flexShrink: 0,
      height: "10",
      width: "10",
    },
    fallback: {
      alignItems: "center",
      background: "bg.subtle",
      borderWidth: "1px",
      display: "flex",
      fontWeight: "semibold",
      height: "inherit",
      justifyContent: "center",
      textStyle: "md",
    },
    image: {
      objectFit: "cover",
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          height: "8",
          width: "8",
        },
        fallback: {
          textStyle: "xs",
        },
      },
      sm: {
        root: {
          height: "9",
          width: "9",
        },
        fallback: {
          textStyle: "sm",
        },
      },
      lg: {
        root: {
          height: "11",
          width: "11",
        },
        fallback: {
          textStyle: "lg",
        },
      },
      xl: {
        root: {
          height: "12",
          width: "12",
        },
        fallback: {
          textStyle: "xl",
        },
      },
      "2xl": {
        root: {
          height: "16",
          width: "16",
        },
        fallback: {
          textStyle: "2xl",
        },
      },
    },
  },
});
