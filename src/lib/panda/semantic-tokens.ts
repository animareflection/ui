import { defineSemanticTokens } from "@pandacss/dev";

const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      canvas: {
        value: {
          base: "{colors.gray-palette.25}",
          _dark: "{colors.gray-palette.950}",
        },
      },
      default: {
        value: { base: "{colors.white}", _dark: "{colors.gray-palette.950}" },
      },
      subtle: {
        value: {
          base: "{colors.gray-palette.50}",
          _dark: "{colors.gray-palette.900}",
        },
      },
      muted: {
        value: {
          base: "{colors.gray-palette.200}",
          _dark: "{colors.gray-palette.800}",
        },
      },
      emphasized: {
        value: {
          base: "{colors.gray-palette.300}",
          _dark: "{colors.gray-palette.600}",
        },
      },
      disabled: {
        value: {
          base: "{colors.gray-palette.200}",
          _dark: "{colors.gray-palette.700}",
        },
      },
    },
    fg: {
      default: {
        value: { base: "{colors.gray-palette.950}", _dark: "{colors.white}" },
      },
      emphasized: {
        value: {
          base: "{colors.brand.primary.500}",
          _dark: "{colors.brand.primary.300}",
        },
      },
      muted: {
        value: {
          base: "{colors.gray-palette.600}",
          _dark: "{colors.gray-palette.300}",
        },
      },
      subtle: {
        value: {
          base: "{colors.gray-palette.500}",
          _dark: "{colors.gray-palette.400}",
        },
      },
      disabled: {
        value: {
          base: "{colors.gray-palette.200}",
          _dark: "{colors.gray-palette.800}",
        },
      },
    },
    accent: {
      default: {
        value: {
          base: "{colors.brand.primary.400}",
          _dark: "{colors.brand.primary.400}",
        },
      },
      emphasized: {
        value: {
          base: "{colors.brand.primary.500}",
          _dark: "{colors.brand.primary.300}",
        },
      },
      subtle: {
        value: {
          base: "{colors.brand.primary.50}",
          _dark: "{colors.brand.primary.900}",
        },
      },
      fg: {
        value: { base: "{colors.white}", _dark: "{colors.gray-palette.950}" },
      },
    },

    border: {
      default: {
        value: {
          base: "{colors.gray-palette.200}",
          _dark: "{colors.gray-palette.800}",
        },
      },
      emphasized: {
        value: {
          base: "{colors.brand.primary.500}",
          _dark: "{colors.brand.primary.300}",
        },
      },
      outline: {
        value: {
          base: "{colors.gray-palette.600}",
          _dark: "{colors.gray-palette.400}",
        },
      },
      accent: {
        value: {
          base: "{colors.brand.primary.400}",
          _dark: "{colors.brand.primary.400}",
        },
      },
      disabled: {
        value: {
          base: "{colors.gray-palette.200}",
          _dark: "{colors.gray-palette.800}",
        },
      },
    },
  },
});

export default semanticTokens;
