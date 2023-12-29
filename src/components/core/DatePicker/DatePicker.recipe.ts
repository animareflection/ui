import { datePickerAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Date picker style recipe.
 */
export const datePickerRecipe = defineSlotRecipe({
  className: "datePicker",
  description: "Date picker styles",
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      colorPalette: "accent",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    content: {
      bgColor: "bg.default",
      borderRadius: "md",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      p: 4,
      width: "344px",
      zIndex: "dropdown",
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
      _hidden: {
        display: "none",
      },
    },
    control: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },
    label: {
      color: "fg.default",
      fontWeight: "medium",
      textStyle: "sm",
    },
    tableHeader: {
      color: "fg.muted",
      fontWeight: "semibold",
      height: 10,
      textStyle: "sm",
    },
    viewControl: {
      display: "flex",
      gap: 2,
      alignItems: "center",
      justifyContent: "space-between",
    },
    table: {
      width: "full",
      borderCollapse: "separate",
      borderSpacing: 1,
      m: -1,
    },
    tableCell: {
      textAlign: "center",
    },
    tableCellTrigger: {
      width: "100%",
      _today: {
        _before: {
          content: "'−'",
          color: "colorPalette.default",
          position: "absolute",
          marginTop: 6,
        },
      },
      "&[data-in-range]": {
        bgColor: "bg.muted",
      },
      _selected: {
        _before: {
          color: "colorPalette.fg",
        },
      },
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      _hidden: {
        display: "none",
      },
    },
  },
});
