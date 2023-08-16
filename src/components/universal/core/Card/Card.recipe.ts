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
      bgColor: "bg.default",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
      fontWeight: "semibold",
      color: "fg.default",
    },
    body: {
      color: "fg.default",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 4,
      py: 2,
    },
    footer: {
      color: "fg.default",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
    },
  },
});
