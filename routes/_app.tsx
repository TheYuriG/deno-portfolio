//? HTML Head to setup the script tag that will set the theme colors
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

//? This will run before every response, so the theming color always
//? gets applied before anything else on the page.
//! WARNING: Anything you do here will inject on EVERY. SINGLE. REQUEST!
export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Gets the saved theme, if the user has one
            const selectedTheme = localStorage.getItem('theme');

            // Save on the window object if we should enable Dark Mode
            if (selectedTheme === undefined) {
                window.showDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            } else {
                window.showDarkMode = selectedTheme === 'Dark';
            }

            // Grab the HTML root element, so the chosen colors can be applied to 
            const cssRoot = document.querySelector(":root");

            // Sets Dark Mode, if either that's the theme saved on localStorage or
            // if it's the user's OS mode preference
            if (window.showDarkMode === true) {
                // TW Slate 900 background color
                cssRoot.style.setProperty("--base-color", "rgb(15 23 42)");
                // TW Slate 300 text color
                cssRoot.style.setProperty("--neutral-color", "rgb(203 213 225)");
                // TW Purple 700 accent
                cssRoot.style.setProperty("--accent-color", "rgb(126 34 206)");
            }
            // If the User didn't save Dark Mode as their preferred theme
            // OR they haven't set their OS preference to Dark Mode, then
            // display the website in Light Mode (default option)
            else {
                // TW Slate 300 background color
                cssRoot.style.setProperty("--base-color", "rgb(203 213 225)");
                // TW Slate 900 text color
                cssRoot.style.setProperty("--neutral-color", "rgb(15 23 42)");
                // TW Red 600 accent
                cssRoot.style.setProperty("--accent-color", "rgb(220 38 38)");
            }
            `,
          }}
        />
      </Head>
      {/* Loads everything else related to the route path that will be sent as response */}
      <Component />
    </html>
  );
}
