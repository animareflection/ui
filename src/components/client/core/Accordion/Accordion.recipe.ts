import { sva } from "generated/panda/css";

export const recipe = sva({
  slots: ["root", "trigger", "content"],
  base: {
    root: {
      width: "full",
      paddingY: "1",
    },
    trigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      fontWeight: "medium",
      justifyContent: "space-between",
      width: "full",
    },
    content: {
      // color: "fg.muted",
      // display grid does not work
      // display: "flex",
      // gridTemplateRows: "0fr",
      // transitionProperty: "grid-template-rows, padding-bottom",
      // transitionDuration: "normal",
      // transitionTimingFunction: "default",
    },
  },
  defaultVariants: {},
  variants: {},
});
