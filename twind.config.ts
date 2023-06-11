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
        "slide-top": "slide-top 0.6s ease-in-out both", // little hack to attach animation delay to animation
        // Slide from left to right
        "slide-right": "slide-right 0.6s ease-in-out both", // little hack to attach animation delay to animation
        // Rotates on X axis
        "x-spin": "x-rotation 4s linear infinite;",
        // Rotates on Y axis
        "y-spin": "y-rotation 5s linear infinite;",
        // Rotates on Z axis
        "z-spin": "z-rotation 6s linear infinite;",
        // Fade in animation from opacity
        "fade-in": "fade-in 0.5s",
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
            transform: "rotateX(0turn)",
          },

          "100%": {
            transform: "rotateX(1turn)",
          },
        },
        // Rotates on Y axis
        "y-rotation": {
          "0%": {
            transform: "rotateY(0turn)",
          },

          "100%": {
            transform: "rotateY(1turn)",
          },
        },
        // Rotates on Z axis
        "z-rotation": {
          "0%": {
            transform: "rotateZ(0turn)",
          },

          "100%": {
            transform: "rotateZ(1turn)",
          },
        },
        // Fade in animation from opacity
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  // Custom classes
  plugins: {
    // Animation delay for items sliding to right
    "delay-slide-right": { "animation-delay": "calc(var(--dur)*0.2s)" },
    // Animation delay for items sliding to top
    "delay-slide-top": { "animation-delay": "calc(var(--dur)*0.3s)" },
    // Animation pause
    pause: {
      "animation-play-state": "paused",
    },
    // Style scrollbar width and colors
    "styled-scrollbar": {
      "&::-webkit-scrollbar-thumb": {
        "background-color": "transparent",
        outline: "2px solid var(--accent-color)",
        "outline-offset": "-0.1rem",
        "border-radius": "0.3rem",
      },
      "&::-webkit-scrollbar": {
        width: "0.8em",
      },
    },
    // Accent border
    "bo-ac": {
      border: "2px solid var(--accent-color)",
    },
    // Base border
    "bo-bc": {
      border: "2px solid var(--base-color)",
    },
    // Neutral border
    "bo-nc": {
      border: "2px solid var(--neutral-color)",
    },
    // Accent box shadow
    "sh-ac": {
      "box-shadow": "0.1em 0.1em 0.3em var(--accent-color)",
    },
    // Base box shadow
    "sh-bc": {
      "box-shadow": "0.1em 0.1em 0.3em var(--base-color)",
    },
    // Neutral box shadow
    "sh-nc": {
      "box-shadow": "0.1em 0.1em 0.3em var(--neutral-color)",
    },
    // Accent text
    "tx-ac": {
      color: "var(--accent-color)",
    },
    // Base text
    "tx-bc": {
      color: "var(--base-color)",
    },
    // Neutral text
    "tx-nc": {
      color: "var(--neutral-color)",
    },
    // Accent background
    "bg-ac": {
      "background-color": "var(--accent-color)",
    },
    // Base background
    "bg-bc": {
      "background-color": "var(--base-color)",
    },
    // Neutral background
    "bg-nc": {
      "background-color": "var(--neutral-color)",
    },
    // Change font to custom Alfa Slab One
    "f-as": {
      "font-family": "'Alfa Slab One', cursive",
    },
    // Define text color transition
    "tr-tx": {
      transition: "color 0.9s ease-in-out",
    },
    // Define background color transition
    "tr-bg": {
      transition: "background-color 0.8s ease-in-out",
    },
    // Define border color transition
    "tr-bo": {
      transition: "border 0.6s ease-in-out",
    },
    // Define fill color transition
    "tr-fi": {
      transition: "fill 0.9s ease-in-out",
    },
    // Define text color and background color transition
    "tr-txbgbo": {
      transition:
        "color 0.9s ease-in-out, background-color 0.8s ease-in-out,border 0.6s ease-in-out",
    },
    "gradient-underline": {
      "&": {
        display: "inline-block",
        position: "relative",
        "text-decoration": "none",
        transition: "color ease-in-out 0.5s",
      },
      "&:hover": { color: "var(--accent-color)" },
      "&:before": {
        content: "''",
        position: "absolute",
        bottom: "-0.05em",
        width: "100%",
        height: "3px",
        background: "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)",
      },
    },
  },
} as Options;
