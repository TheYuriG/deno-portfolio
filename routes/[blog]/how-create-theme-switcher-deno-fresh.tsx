//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="How to Create a Theme Switcher with Fresh"
        description="A guide on how to create your own Theme Switcher using Deno and Fresh"
        link="https://www.theyurig.com/blog/how-create-theme-switcher-deno-fresh"
      >
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
        <link rel="stylesheet" href="/syntax-highlighting.css" />
        {
          /* Syntax highlight for code. How can we do this better
            so we don't cause Cumulative Layout Shift?
            There must be a better way... */

          // Checked March 23rd, 2023 and there is currently no better
          // option for Deno. As for NPM packages, options to consider are
          // rc-highlight: https://www.npmjs.com/package/rc-highlight
          // and lowlight: https://github.com/wooorm/lowlight
        }
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html:
              `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
            highlightAll();`,
          }}
        />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons />
        <article class="center">
          {/* Centered heading */}
          <h2 class="navigation-link blog-title">
            How to Create a Theme Switcher with Fresh
          </h2>
          {/* Post creation date */}
          <p class="post-date">
            {new Date(1684849328672).toLocaleString()}
          </p>
          {/* Blog post opening image */}
          <img
            src={"https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/skKcjSv1gMQRYk1AdEp7.png?auto=format&w=1600"}
            alt="Sun and Moon montage with the words Light and Dark accompanying them"
            title="To many people, themes are an important part of the User Experience"
            class="large-image"
          />
          {/* Introduction */}
          <p class="space">
            Being able to customize your Theme is a huge user experience upgrade
            to any website. While some websites use a default Dark Theme, the
            majority of the internet still sticks to creating content in Light
            Mode as default (and sometimes the only option).
          </p>
          {/* Presenting the problem */}
          <p class="space">
            However, if you have tried to do this on your own before, you might
            have run into a problem... or many. In this blog post, I'll explain
            how I've managed to create my theme, what pitfalls I've faced, and
            how I've circumvented them.
          </p>
          {/* Heading and image introducing to next topic: Fresh */}
          <h2 class="subtopic">What is Fresh?</h2>
          <img
            src={"https://fresh.deno.dev/logo.svg?__frsh_c=3171c5e64510907f14fca32f4e0ba9a86bc5247c"}
            alt="Fresh's logo"
            title="Fresh, the official framework to build Web apps on Deno"
            class="small-image"
          />
          {/* Explaining what is Fresh */}
          <p class="space">
            <a
              class="gradient-underline pretty-link"
              href="https://fresh.deno.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fresh
            </a>{" "}
            is the official framework to create web apps using the Deno
            javascript runtime. It features no build-time, zero-config,
            typescript support out-of-the-box, JIT-rendering, and uses the
            Island design architecture (more about this in a minute). The
            premise here is very simple: Single Page Applications rely heavily
            on the Client's devices to build the webpages and that will impact
            your performance. Fresh, just like Remix (and to some extent Next),
            aims to move all the rendering back to the server and serves
            exclusively static HTML pages, hydrating any potential Javascript
            interactivity only when necessary. While that's amazing for
            Lighthouse performance, it comes with its own sets of drawbacks
            (more on that in the next post).
          </p>
          {/* Further explanation about Fresh */}
          <p class="space">
            Fresh uses Preact under the hood to compile the JSX/TSX files into
            static HTML that gets sent to clients. If you have any experience
            with React, SolidJS or Remix, you shouldn't have any trouble
            adapting, specially if you have experience building React+NextJS
            projects.
          </p>
          {/* Main content start */}
          <h2 class="subtopic">Creating A Theme Switcher</h2>
          <p class="space">Let's create a very simple Theme Switcher:</p>
          {/* Code block with initial implementation */}
          <div class="shj-lang-js">
            {`// /islands/ThemeSwitcher.tsx
import { useState, useEffect } from 'preact/hooks';
export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('Dark');

    useEffect(() => {
		const cssRoot: HTMLElement | null = document.querySelector(':root');
		if (cssRoot !== null) {
			if (theme === 'Light') {
				cssRoot.style.setProperty('--base-color', 'rgb(203 213 225)');
				cssRoot.style.setProperty('--neutral-color', 'rgb(15 23 42)');
				cssRoot.style.setProperty('--accent-color', 'rgb(220 38 38)');
			} else {
				cssRoot.style.setProperty('--base-color', 'rgb(15 23 42)');
				cssRoot.style.setProperty('--neutral-color', 'rgb(203 213 225)');
				cssRoot.style.setProperty('--accent-color', 'rgb(126 34 206)');
			}
		}
	}, [theme]);

    const themes: string[] = ['Dark', 'Light'];

    return (
		<>
			{themes.map((themeOption) => (
				<label for={themeOption}>
					<input
						class="mr-1"
						type="radio"
						id={themeOption}
						name="theme"
						checked={theme == themeOption}
						onClick={() => {
							setTheme(themeOption);
						}}
					></input>
					{themeOption}
				</label>
			))}
		</>
	);
}`}
          </div>
          {/* Initial implementation explanation */}
          <p>
            This creates a radio input that has{" "}
            <code class="shj-lang-js">
              Dark
            </code>{" "}
            selected by default and allows you to toggle between modes.
            Switching themes will toggle between the Light and the Dark versions
            of the theme for this blog, now let's make sure we can save the
            changes when the user clicks either input. Feel free to replace the
            values of{" "}
            <code class="shj-lang-js">
              --base-color
            </code>
            ,{" "}
            <code class="shj-lang-js">
              --neutral-color
            </code>
            , and{" "}
            <code class="shj-lang-js">
              --accent-color
            </code>{" "}
            with the values for your theme.
          </p>
          {/* Improved implementation with localStorage */}
          <div class="shj-lang-js">
            {`// /islands/ThemeSwitcher.tsx (updated)
import { useEffect, useRef, useState } from "preact/hooks";
...
const isInitialMount = useRef(true);

useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (isInitialMount.current === true) {
        if (savedTheme !== null && savedTheme !== theme){
            setTheme(() => savedTheme)
            return
        }

      isInitialMount.current = false;
      return;
    }
    localStorage.setItem("theme", theme);
...`}
          </div>
          {/* Second code block explanation */}
          <p class="space">
            We have added a reference to the{" "}
            <code class="shj-lang-js">
              useEffect
            </code>{" "}
            to avoid having it saving the current{" "}
            <code class="shj-lang-js">
              theme
            </code>{" "}
            to{" "}
            <code class="shj-lang-js">
              localStorage
            </code>{" "}
            on the first render.
          </p>
          <p>
            What the{" "}
            <code class="shj-lang-js">
              useEffect()
            </code>{" "}
            does, in order:
          </p>
          {/* Explanation part 1 */}
          <p>
            1- Runs on start, checks if there is a theme saved (if not,{" "}
            <code class="shj-lang-js">
              savedTheme
            </code>{" "}
            will be{" "}
            <code class="shj-lang-js">
              null
            </code>
            ), and sets the current theme as the{" "}
            <code class="shj-lang-js">
              savedTheme
            </code>
            , if they are different, then stops (remember that{" "}
            <code class="shj-lang-js">
              useEffect()
            </code>{" "}
            is using the{" "}
            <code class="shj-lang-js">
              theme
            </code>{" "}
            as a dependency so not returning here would cause an infinite
            loop!).
          </p>
          {/* Explanation part 2 */}
          <p>
            2- After setting the{" "}
            <code class="shj-lang-js">
              theme
            </code>{" "}
            equal to{" "}
            <code class="shj-lang-js">
              localStorage
            </code>'s{" "}
            <code class="shj-lang-js">
              savedTheme
            </code>{" "}
            is the same as the{" "}
            <code class="shj-lang-js">
              theme
            </code>
            , it will skip the first{" "}
            <code class="shj-lang-js">
              if
            </code>{" "}
            check and negate the{" "}
            <code class="shj-lang-js">
              isInitialMount
            </code>{" "}
            value and stop.
          </p>
          {/* Explanation part 3 */}
          <p>
            3- (Optional) If the{" "}
            <code class="shj-lang-js">
              theme
            </code>{" "}
            is updated, it will skip both{" "}
            <code class="shj-lang-js">
              if
            </code>{" "}
            checks, save the theme to{" "}
            <code class="shj-lang-js">
              localStorage
            </code>
            , and applies it.
          </p>
          {/* Linking to repository version */}
          <p class="space">
            This website uses an improved version of this Theme Switcher, which
            you can check the source code for{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://github.com/TheYuriG/deno-portfolio/blob/0051fc7369f714a7562d303f760e148efc753ea4/islands/ThemeSwitcher.tsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              right here
            </a>.
          </p>
          {/* Conclusion and link to next post */}
          <p class="space">
            So there you have it, a Theme Switcher built with Preact and Fresh.
            If you have been following along, you might have noticed a few
            issues with it, like flickering on first load. Let's work on those
            on the{" "}
            <a
              class="gradient-underline pretty-link"
              href="/how-remove-theme-flickering-deno-fresh"
            >
              next blog post
            </a>.
          </p>
          {/* Post author */}
          <footer class="blog-footer" style="margin-top: auto;">
            Written with 💞 by TheYuriG
          </footer>
        </article>
      </Base>
    </>
  );
}
