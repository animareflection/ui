import { sva } from "generated/panda/css";

export const recipe = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRadius: "md",
      boxShadow: "sm",
      bgColor: { base: "background.primary", _dark: "background.secondary" },
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
      fontWeight: "semibold",
      color: "foreground.primary",
    },
    body: {
      color: "foreground.primary",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 4,
      py: 2,
    },
    footer: {
      color: "foreground.primary",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
    },
  },
});
