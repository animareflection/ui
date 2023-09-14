import { defineSlotRecipe } from "@pandacss/dev";

export const breadcrumbRecipe = defineSlotRecipe({
  className: "breadcrumb",
  description: "The styles for the Breadcrumb component",
  slots: ["breadcrumb", "link"],
  base: {
    breadcrumb: {
      display: "flex",
      gap: 2,
      alignItems: "center",
      p: 2,
    },
    link: {
      color: "fg.default",
      _hover: {
        color: "accent.default",
      },
    },
  },
});
