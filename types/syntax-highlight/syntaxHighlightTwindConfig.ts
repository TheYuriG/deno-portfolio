export const syntaxHighlightTwindConfig =
  `import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  plugins: {
    // Syntax highlighting
    "shl": ([highlightType]: Array<string>) => {
      switch (highlightType) {
        case "block":
          return {
            "white-space": "pre-wrap",
            background: "rgb(255, 246, 239)",
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
} as Options;`;
