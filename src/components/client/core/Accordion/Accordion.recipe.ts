import { sva } from "generated/panda/css";

export const recipe = sva({
  slots: ["root", "trigger", "content"],
  base: {
    root: {
      width: "full",
      py: 1,
      borderRadius: "md",
    },
    trigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      px: 4,
      fontWeight: "medium",
      justifyContent: "space-between",
      width: "full",
    },
    // content radius needs to be adjusted with new accordion button variant
    content: {
      color: "black",
      backgroundColor: "gray.200",
      borderRadius: "md",
      mt: 2,
      px: 4,
      py: 2,
      "& > div": {
        overflow: "hidden",
      },
    },
  },
  defaultVariants: {},
  variants: {},
});
