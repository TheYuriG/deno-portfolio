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
        // Slide from bottom to top
        "slide-top":
          "slide-top 0.6s ease-in-out both; animation-delay: calc(var(--dur)*0.3s)", // little hack to attach animation delay to animation
        // Slide from left to right
        "slide-right":
          "slide-right 0.6s ease-in-out both; animation-delay: calc(var(--dur)*0.2s)", // little hack to attach animation delay to animation
        // Rotates on X axis
        "x-spin": "x-rotation 4s linear infinite;",
        // Rotates on Y axis
        "y-spin": "y-rotation 5s linear infinite;",
        // Rotates on Z axis
        "z-spin": "z-rotation 6s linear infinite;",
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
        // Slide content from bottom to top
        "slide-top": {
          "0%": {
            opacity: 0,
            transform: "translateY(5em)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        // Slide content from left to right
        "slide-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(-3em)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        // Rotates on X axis
        "x-rotation": {
          "0%": {
            "transform": "rotateX(0turn)",
          },

          "100%": {
            "transform": "rotateX(1turn)",
          },
        },
        // Rotates on Y axis
        "y-rotation": {
          "0%": {
            "transform": "rotateY(0turn)",
          },

          "100%": {
            "transform": "rotateY(1turn)",
          },
        },
        // Rotates on Z axis
        "z-rotation": {
          "0%": {
            "transform": "rotateZ(0turn)",
          },

          "100%": {
            "transform": "rotateZ(1turn)",
          },
        },
      },
    },
  },
} as Options;
