import { defineSlotRecipe } from "@pandacss/dev";

export const datePickerRecipe = defineSlotRecipe({
  className: "datePicker",
  description: "The styles for the DatePicker component",
  slots: [
    "cellTrigger",
    "content",
    "grid",
    "rowGroup",
    "row",
    "rowHeader",
    "columnHeader",
  ],

  base: {
    cellTrigger: {
      _disabled: {
        color: "fg.disabled",
        cursor: "not-allowed",
        _hover: {
          background: "transparent",
          color: "fg.disabled",
        },
      },
      "&[data-in-range]": {
        color: "fg.default",
        background: "accent.subtle",
        borderRadius: "md",
        _hover: {
          bgColor: "transparent",
          color: "fg.emphasized",
        },
      },
      _selected: {
        _before: {
          bgColor: "accent.subtle",
          color: "fg.default",
        },
      },
      _focus: {
        color: "fg.default",
        background: "accent.subtle",
        borderRadius: "md",
      },
    },
    content: {
      background: "bg.default",
      borderColor: "border.default",
      borderRadius: "sm",
      boxShadow: "sm",
      borderWidth: "1px",
      p: "4",
      width: "fit-content",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      '&[data-type="day"] [data-part="row"]': {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      '&[data-type="month"] [data-part="row"]': {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      '&[data-type="year"] [data-part="row"]': {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
    rowGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
    },
    row: {
      display: "grid",
      gap: "1",
    },
    rowHeader: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    columnHeader: {
      alignItems: "center",
      color: "fg.subtle",
      display: "inline-flex",
      fontWeight: "semibold",
      height: "10",
      justifyContent: "center",
      textStyle: "sm",
      width: "10",
    },
  },
});
