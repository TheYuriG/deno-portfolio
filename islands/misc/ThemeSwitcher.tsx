//? Import hooks so a theme can be loaded on pageLoad and
//? set on a click to the Radio buttons
import { useEffect, useRef, useState } from "preact/hooks";
import { SunIcon } from "../../assets/SunIcon.tsx";
import { MoonIcon } from "../../assets/MoonIcon.tsx";

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
  const [theme, setTheme] = useState(
    // @ts-ignore When the type gets set by the script in
    // /routes/_app.tsx, we can then set what will be the button displayed
    window.showDarkMode === true ? "Dark" : "Light",
  );

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

  //? If the selected theme is Light mode, display the "Sun icon + Light" button
  if (theme === "Light") {
    return (
      <>
        <button
          class="flex items-center w-[4em] h-[1.3em] fixed bottom-[2.5em] -rotate-90 translate-x-[-83%] text-xl animate-fade-in"
          onClick={() => setTheme(() => "Dark")}
        >
          <SunIcon iconHeight="1em" iconWidth="1em" />
          Light
        </button>
      </>
    );
  } //? If the selected theme is Dark mode, display the "Moon icon + Dark" button
  else if (theme === "Dark") {
    return (
      <>
        <button
          class="flex items-center w-[4em] h-[1.3em] fixed bottom-[2.5em] -rotate-90 translate-x-[-83%] text-xl animate-fade-in"
          onClick={() => setTheme(() => "Light")}
        >
          <MoonIcon iconHeight="1em" iconWidth="1em" />
          Dark
        </button>
      </>
    );
  } //? While we don't have access to the theme selection, display nothing
  //? so that we can later use a transition animation to fade in the button
  else {
    return <></>;
  }
}
