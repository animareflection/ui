import { defineRecipe } from "@pandacss/dev";

export const breadcrumbRecipe = defineRecipe({
  className: "breadcrumb",
  description: "The styles for the Breadcrumb component",
  base: {
    display: "flex",
    gap: 2,
    alignItems: "center",
    p: 2,
  },
});
