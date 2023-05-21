//? Import hooks so a theme can be loaded on pageLoad and
//? set on a click to the Radio buttons
import { useEffect, useRef, useState } from "preact/hooks";

//? Exports the ThemeSwitcher Island, so users can switch
//? themes, if so they desire
//! The theme is applied on page load by the route _app.tsx
//! Changing things here and not there might break functionality
export default function ThemeSwitcher() {
  //? Create a reference that will track if the useEffect()
  //? should update the theme and save to localStorage. This
  //? reference is initially true so that the useEffect() skips
  //? setting a value for the theme on the first pass
  const isInitialMount = useRef(true);

  //? Manages the theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  //? Saves switched theme on change, but not on first load
  useEffect(() => {
    //? Checks for initial mount to avoid changing theme twice
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    //? Saves current theme to local storage
    localStorage.setItem("theme", theme);

    //? Access the root element, where our styles were defined
    const cssRoot: HTMLElement | null = document.querySelector(":root");
    if (cssRoot !== null) {
      // Transition effect to make the switch to Light theme on load less jarring
      cssRoot.style.setProperty("transition", "color 0.9s ease-in-out");
      cssRoot.style.setProperty(
        "transition",
        "background-color 0.8s ease-in-out",
      );

      if (theme === "Light") {
        // TW Slate 300 background color
        cssRoot.style.setProperty("--base-color", "rgb(203 213 225)");
        // TW Slate 900 text color
        cssRoot.style.setProperty("--neutral-color", "rgb(15 23 42)");
        // TW Red 600 accent
        cssRoot.style.setProperty("--accent-color", "rgb(220 38 38)");
      } else {
        // TW Slate 900 background color
        cssRoot.style.setProperty("--base-color", "rgb(15 23 42)");
        // TW Slate 300 text color
        cssRoot.style.setProperty("--neutral-color", "rgb(203 213 225)");
        // TW Purple 700 accent
        cssRoot.style.setProperty("--accent-color", "rgb(126 34 206)");
      }
    }
  }, [theme]);

  if (theme === "Light") {
    return (
      <>
        <button onClick={() => setTheme(() => "Dark")}>
          <div class="theme-switcher">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
            Light
          </div>
        </button>
      </>
    );
  } else if (theme === "Dark") {
    return (
      <>
        <button onClick={() => setTheme(() => "Light")}>
          <div class="theme-switcher">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
              />
            </svg>
            Dark
          </div>
        </button>
      </>
    );
  } else {
    return (
      <>
        <div></div>
      </>
    );
  }
}
