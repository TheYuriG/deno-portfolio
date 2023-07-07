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
        // Pulsing animation for adding new items to the shopping cart
        "pulsing-cart": "shopping-cart-pulse 0.3s ease-in-out",
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
        // Pulse animation, grow 10% then shrink back to original
        "shopping-cart-pulse": {
          "0%": {
            transform: "scale(1)",
          },

          "70%": {
            transform: "scale(1.1)",
          },

          "100%": {
            transform: "scale(1)",
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
    // Custom styled components
    "styled": ([component]: Array<string>) => {
      switch (component) {
        // Style scrollbar width and colors
        case "scrollbar":
          return {
            "&::-webkit-scrollbar-thumb": {
              "background-color": "transparent",
              outline: "2px solid var(--accent-color)",
              "outline-offset": "-0.1rem",
              "border-radius": "0.3rem",
            },
            "&::-webkit-scrollbar": {
              width: "0.8em",
            },
          };
        // Radio input
        case "radio": {
          return {
            "&": {
              /* Remove default selection circle */
              "-webkit-appearance": "none",
              "appearance": "none",
              /* For iOS < 15 to remove gradient background */
              "background-color": "var(--base-color)",
              margin: "0",
              font: "inherit",
              color: "var(--neutral-color)",
              /* Sizing */
              width: "0.9em",
              height: "0.9em",
              /* Outline for checker */
              border: "0.15em solid var(--neutral-color)",
              "border-radius": "50%",
              /* Push right the label text */
              "margin-right": "0.5em",
              /* Push down the checker */
              transform: "translateY(0.3em)",
              /* Enable the radio check icon to be centered inside the checker */
              display: "grid",
              "place-content": "center",
            },
            "&::before": {
              content: '""',
              width: "0.5em",
              height: "0.5em",
              "border-radius": "50%",
              transform: "scale(0)",
              transition: "0.2s transform ease-in-out",
              "box-shadow": "inset 1em 1em var(--accent-color)",
            },
            "&:checked::before": {
              transform: "scale(1)",
            },
            "&:focus": {
              outline: "max(2px, 0.15em) solid var(--accent-color)",
              "outline-offset": "max(2px, 0.15em)",
            },
          };
        }
        // Checkbox input
        case "checkbox": {
          return {
            "&": {
              /* Remove default selection circle */
              "-webkit-appearance": "none",
              "appearance": "none",
              /* For iOS < 15 to remove gradient background */
              "background-color": "var(--base-color)",
              margin: "0",
              font: "inherit",
              color: "var(--neutral-color)",
              /* Sizing */
              width: "0.9em",
              height: "0.9em",
              /* Outline for checker */
              border: "0.15em solid var(--neutral-color)",
              /* Border radius for checkbox, radio gets overriden below */
              "border-radius": "0.2em",
              /* Push right the label text */
              "margin-right": "0.5em",
              /* Push down the checker */
              transform: "translateY(0.3em)",
              /* Enable the radio check icon to be centered inside the checker */
              display: "grid",
              "place-content": "center",
            },
            "&::before": {
              content: '""',
              width: "0.5em",
              height: "0.5em",
              transform: "scale(0)",
              transition: "0.2s transform ease-in-out",
              "box-shadow": "inset 1em 1em var(--accent-color)",
              "transform-origin": "bottom left",
              "clip-path":
                "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
            },
            "&:checked::before": {
              transform: "scale(1)",
            },
            "&:focus": {
              outline: "max(2px, 0.15em) solid var(--accent-color)",
              "outline-offset": "max(2px, 0.15em)",
            },
          };
        }
        // Style the date-picker icon for date inputs
        case "date":
          return {
            "&::-webkit-calendar-picker-indicator": {
              "background-color": "white",
              padding: "0.3em",
              cursor: "pointer",
              "border-radius": "0.25em",
            },
          };
      }
    },
    // Center an element positioned with top50% left50%
    "transform-center": {
      transform: "translate(-50%, -50%)",
    },
    // Modal backdrop
    "backdrop-blur": {
      "backdrop-filter": "blur(0.2em)",
    },
    // Change font to custom Alfa Slab One
    "f-as": {
      "font-family": "'Alfa Slab One', cursive",
    },
    // Borders
    "custom-bo": ([borderType]: Array<string>) => {
      switch (borderType) {
        // Accent border
        case "ac":
          return {
            border: "2px solid var(--accent-color)",
          };
        // Base border
        case "bc":
          return {
            border: "2px solid var(--base-color)",
          };
        // Neutral border
        case "nc":
          return {
            border: "2px solid var(--neutral-color)",
          };
      }
    },
    // Box Shadows
    "custom-sh": ([boxShadowType]: Array<string>) => {
      switch (boxShadowType) {
        // Accent box shadow
        case "ac":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--accent-color)",
          };
        // Base box shadow
        case "bc":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--base-color)",
          };
        // Neutral box shadow
        case "nc":
          return {
            "box-shadow": "0.1em 0.1em 0.3em var(--neutral-color)",
          };
      }
    },
    // Text colors
    "custom-tx": ([textType]: Array<string>) => {
      switch (textType) {
        // Accent text
        case "ac":
          return {
            color: "var(--accent-color)",
          };
        // Base text
        case "bc":
          return {
            color: "var(--base-color)",
          };
        // Neutral text
        case "nc":
          return {
            color: "var(--neutral-color)",
          };
      }
    },
    // Placeholder text color
    "custom-placeholder": ([placeholderColor]: Array<string>) => {
      switch (placeholderColor) {
        // Accent text
        case "ac":
          return {
            "&::placeholder": {
              color: "var(--accent-color)",
            },
          };
        // Base text
        case "bc":
          return {
            "&::placeholder": {
              color: "var(--base-color)",
            },
          };
        // Neutral text
        case "nc":
          return {
            "&::placeholder": {
              color: "var(--neutral-color)",
            },
          };
      }
    },
    // Background colors
    "custom-bg": ([backgroundColorType]: Array<string>) => {
      switch (backgroundColorType) {
        // Accent background
        case "ac":
          return {
            "background-color": "var(--accent-color)",
          };
        // Base background
        case "bc":
          return { "background-color": "var(--base-color)" };
        // Neutral background
        case "nc":
          return {
            "background-color": "var(--neutral-color)",
          };
      }
    },
    // Transitions
    "custom-tr": (transition: Array<string>) => {
      const transitions: Array<string> = [];
      for (const tr of transition) {
        switch (tr) {
          // Define height transition
          case "h":
            transitions.push(
              "height 0.5s ease-in-out",
            );
            break;
            // Define text color transition
          case "tx":
            transitions.push("color 0.9s ease-in-out");
            break;
          // Define background color transition
          case "bg":
            transitions.push("background-color 0.8s ease-in-out");
            break;
          // Define border color transition
          case "bo":
            transitions.push("border 0.6s ease-in-out");
            break;
          // Define fill color transition
          case "fi":
            transitions.push("fill 0.9s ease-in-out");
            break;
          // Define width fade-in (grow) transition
          case "wfi":
            transitions.push("width 0.7s ease-in-out");
            break;
          // Define width fade-out (shrink) transition
          case "wfo":
            transitions.push("width 0.7s ease-in-out");
            break;
        }
      }
      return { transition: transitions.join(", ") };
    },
    // Custom quote styling (should be applied on <q> HTML element)
    //! Same 'background-color', 'color' and 'box-shadow' as syntax highlight block
    "custom-quote": {
      quotes: "none",
      "margin-left": "1em",
      "padding": "0.5em 1em 0.5em 1em",
      "background-color": "rgb(255, 246, 239)",
      color: "#112",
      "box-shadow": "0 0 1em 0.3em grey",
      "border-left": "0.25em solid var(--accent-color)",
      "border-radius": "0.25em",
    },
    // Button types
    "custom-button": ([buttonType]: Array<string>) => {
      switch (buttonType) {
        // Accent button
        case "ac":
          return {
            "&": {
              transition:
                "box-shadow 0.4s ease-in-out,transform 0.4s ease-in-out,color 0.9s ease-in-out,background-color 0.8s ease-in-out,border 0.6s ease-in-out",
            },
            "&:focus,&:hover": {
              /* X-axis, Y-axis (needs to match translateY!), blur, color */
              "box-shadow": "0em 0.15em 0.1em var(--neutral-color)",
              /* Elevate button, must match Y-axis shadow above! */
              transform: "translateY(-0.15em)",
            },
          };
        // Styled button
        case "st":
          return {
            "&": {
              "box-shadow": "0.1em 0.2em var(--accent-color)",
              "text-shadow": "0.05em 0.05em 0 var(--accent-color)",
              "transition":
                "background-color 0.8s ease-in-out, color 0.9s, box-shadow 0.4s, border 0.8s, text-shadow 0.4s",
            },
            "&:focus,&:hover": {
              "box-shadow": "0.1em 0.2em var(--neutral-color)",
              "text-shadow": "0.05em 0.05em 0 var(--neutral-color)",
            },
          };
      }
    },
    // Text underline
    "custom-underline": ([underlineType]: Array<string>) => {
      switch (underlineType) {
        // Create a gradient underline below a link
        case "gradient":
          return {
            "&": {
              display: "inline-block",
              position: "relative",
              "text-decoration": "none",
              transition: "color ease-in-out 0.5s",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              bottom: "-0.05em",
              width: "100%",
              height: "3px",
              background:
                "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)",
            },
          };
        // Create a dotted underline that becomes solid on hover
        case "dotted":
          return {
            "&": {
              "text-underline-offset": "0.2em",
              "text-decoration": "underline dotted var(--neutral-color) 0.1em",
              transition:
                "text-underline-offset 600ms, text-decoration 600ms, color 600ms",
            },
            "&:hover": {
              "text-decoration": "underline solid var(--accent-color) 0.1em",
              "text-underline-offset": "0.3em",
            },
          };
        // Fat neutral underline behind text, good for titles
        case "thick":
          return {
            "&": {
              transition: "color 0.5s ease-in-out",
              "text-decoration-color": "var(--neutral-color)",
              "margin-bottom": "0.2em",
              "line-height": "1",
            },
            "&:hover": {
              color: "var(--accent-color)",
              "text-decoration-line": "underline",
              "text-decoration-skip-ink": "none",
              "text-underline-offset": "-0.2em",
              "text-decoration-thickness": "0.3em",
            },
          };
      }
    },
    // Font size scaling
    "custom-font-scale": ([fontSize]: Array<string>) => {
      switch (fontSize) {
        case "largest":
          return {
            "font-size": "clamp(2rem, 4dvw, 4rem)",
          };
        case "large":
          return {
            "font-size": "clamp(1.5rem, 3dvw, 3rem)",
          };
        case "big":
          return {
            "font-size": "clamp(1.25rem, 2.5dvw, 2.5rem)",
          };
      }
    },
    // Syntax highlighting
    "shl": ([highlightType]: Array<string>) => {
      switch (highlightType) {
        case "inline":
          return {
            "white-space": "pre-wrap",
            background: "rgb(255, 246, 239)",
            color: "#112",
            "line-height": "1.3em",
            margin: "0",
            padding: "0 0.5em",
            display: "inline-block",
            "border-radius": "0.5em",
          };
        case "block":
          //! Same 'background-color', 'color' and 'box-shadow' as custom quote
          return {
            "white-space": "pre-wrap",
            "background-color": "rgb(255, 246, 239)",
            color: "#112",
            "line-height": "1.3em",
            margin: "1em 0",
            padding: "1em",
            "border-radius": "1em",
            "box-shadow": "0 0 1em 0.3em grey",
          };
        case "cmnt":
          return {
            "font-style": "italic",
            color: "#999",
          };
        case "err":
        case "kwd":
          return {
            color: "#e16",
          };
        case "num":
        case "class":
          return {
            color: "#f60",
          };
        case "numbers":
          return {
            color: "#999",
          };
        case "insert":
        case "str":
          return {
            color: "#7d8",
          };
        case "bool":
          return {
            color: "#3bf",
          };
        case "type":
        case "oper":
          return {
            color: "#5af",
          };
        case "section":
        case "func":
          return {
            color: "#84f",
          };
        case "deleted":
        case "var":
          return {
            color: "#f44",
          };
      }
    },
  },
} as Options;
