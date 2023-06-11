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
        // Waving animation for hello emoji in the home page
        waving: "waving 0.3s linear infinite alternate;",
        // blinking animation
        blinking: "blinking 1.5s step-end infinite",
        // Loading spinner animation
        loading: "loading-spinner 1.8s infinite ease-in-out",
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
        // Waving emoji for TheYuriG on home page
        waving: {
          "0%": {
            "transform": "translate(10%, 0%) rotate(60deg)",
          },

          "100%": {
            "transform": "translate(-10%, 10%) rotate(0deg)",
          },
        },
        // Blinking animation
        blinking: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
        // Loading spinner animation
        "loading-spinner": {
          "0%": {
            "stroke-dasharray": "1, 98",
            "stroke-dashoffset": "-105",
          },

          "50%": {
            "stroke-dasharray": "80, 15",
            "stroke-dashoffset": "-160",
          },

          "100%": {
            "stroke-dasharray": "1, 98",
            "stroke-dashoffset": "-300",
          },
        },
      },
    },
  },
} as Options;
