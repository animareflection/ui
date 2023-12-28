import { avatarAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
  className: "avatar",
  description: "The styles for the Avatar component",
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      m: "-1px",
      borderColor: "border.default",
      borderWidth: "1px",
      flexShrink: 0,
    },
    fallback: {
      alignItems: "center",
      background: "bg.subtle",
      display: "flex",
      fontWeight: "semibold",
      color: "fg.default",
      height: "inherit",
      justifyContent: "center",
    },
    image: {
      objectFit: "cover",
    },
  },
  defaultVariants: {
    variant: "round",
    size: "md",
  },
  variants: {
    variant: {
      round: {
        root: {
          borderRadius: "full",
        },
      },
      square: {
        root: {
          borderRadius: "lg",
        },
      },
    },
    size: {
      xs: {
        root: {
          height: 8,
          width: 8,
        },
        fallback: {
          textStyle: "xs",
        },
      },
      sm: {
        root: {
          height: 9,
          width: 9,
        },
        fallback: {
          textStyle: "sm",
        },
      },
      md: {
        root: {
          height: 10,
          width: 10,
        },
        fallback: {
          textStyle: "md",
        },
      },
      lg: {
        root: {
          height: 11,
          width: 11,
        },
        fallback: {
          textStyle: "lg",
        },
      },
      xl: {
        root: {
          height: 12,
          width: 12,
        },
        fallback: {
          textStyle: "xl",
        },
      },
      "2xl": {
        root: {
          height: 14,
          width: 14,
        },
        fallback: {
          textStyle: "2xl",
        },
      },
      "3xl": {
        root: {
          height: 16,
          width: 16,
        },
        fallback: {
          textStyle: "3xl",
        },
      },
    },
  },
});
