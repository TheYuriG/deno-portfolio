import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      animation: {
        // Toys card pulsing animation
        "card-pulse": "card-pulse 1.2s ease-out infinite",
        // Insanity grow and shrink
        grow: "grow 1.2s ease-out infinite",
      },
      keyframes: {
        // Toys card pulsing animation
        "card-pulse": {
          "50%": {
            "box-shadow":
              " 0 0 0.2em 0.1em var(--neutral-color) inset, 0 0 0.2em 0.1em var(--neutral-color)",
          },

          "100%": {
            "box-shadow":
              "0 0 0 0 var(--neutral-color) inset, 0 0 0 0 var(--neutral-color)",
          },
        },
        // Insanity grow and shrink
        grow: {
          "50%": {
            "transform": "scale(1.1)",
          },

          "100%": {
            "transform": "scale(1)",
          },
        },
      },
    },
  },
} as Options;
