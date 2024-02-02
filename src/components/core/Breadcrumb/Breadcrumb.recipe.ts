import { defineSlotRecipe } from "@pandacss/dev";

export const breadcrumbRecipe = defineSlotRecipe({
  className: "breadcrumb",
  description: "The styles for the Breadcrumb component",
  slots: ["root", "trigger"],
  base: {
    root: {
      colorPalette: "brand.primary",
      display: "flex",
      gap: 2,
      alignItems: "center",
      p: 2,
    },
    trigger: {
      color: "fg.default",
      cursor: "pointer",
      _hover: {
        color: "colorPalette.500",
      },
      _disabled: {
        color: "fg.muted",
        cursor: "not-allowed",
        _hover: {
          color: "fg.muted",
        },
      },
    },
  },
});
