//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/base/GradientLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="How to Create a Theme Switcher with Fresh"
        description="A guide on how to create your own Theme Switcher using Deno and Fresh"
        link="https://www.theyurig.com/blog/how-create-theme-switcher-deno-fresh"
      >
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
        <BlogNavigationButtons
          back={{ title: "Browse more blog posts", link: "/blog" }}
          next={{
            title: "Read next: Stop theme flickering",
            link: "/blog/stopping-theme-flickering-deno-fresh",
          }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Centered heading */}
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            How to Create a Theme Switcher with Fresh
          </h1>
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(1684849328672).toLocaleString()}
          </p>
          {/* Blog post opening image */}
          <img
            src={"https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/skKcjSv1gMQRYk1AdEp7.png?auto=format&w=1600"}
            alt="Sun and Moon montage with the words Light and Dark accompanying them"
            title="To many people, themes are an important part of the User Experience"
            class="my-4 object-cover"
          />
          {/* Introduction */}
          <p class="my-2 text-justify">
            Being able to customize your Theme can be a huge user experience
            upgrade to any website. While some websites use a default Dark
            Theme, the majority of the internet still sticks to creating content
            in Light Mode as default (and sometimes the only option).
          </p>
          {/* Presenting the problem */}
          <p class="my-2 text-justify">
            However, if you have tried to do this on your own using Fresh
            before, you might have run into a problem... or many. In this blog
            post, I'll explain how I've created my theme, what issues I've
            faced, and how I've solved them.
          </p>
          {/* Heading and image introducing to next topic: Fresh */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            What is Fresh?
          </h2>
          <img
            src={"https://fresh.deno.dev/logo.svg?__frsh_c=3171c5e64510907f14fca32f4e0ba9a86bc5247c"}
            alt="Fresh's logo"
            title="Fresh, the official framework to build Web apps on Deno"
            class="my-4 mx-auto h-40 w-40"
          />
          {/* Explaining what is Fresh */}
          <p class="my-2 text-justify">
            <GradientLink
              link="https://fresh.deno.dev/"
              title="It's dripping!"
              content="Fresh"
              customRel="noopener noreferrer"
            />{" "}
            is the official framework to create web apps using Deno's Javascript
            runtime. It features no build step, zero-config, Typescript support
            out-of-the-box, JIT-rendering, and uses the Island design
            architecture (more about this in a minute). The premise here is very
            simple: Single Page Applications rely heavily on the client's
            devices to build the content of webpages and that creates overhead
            that impacts performance. Fresh, just like{" "}
            <GradientLink
              link="https://remix.run/"
              title="The same, but different"
              content="Remix"
              customRel="noopener noreferrer"
            />{" "}
            (and to some extent{" "}
            <GradientLink
              link="https://nextjs.org/"
              title="Probably the staple of building modern React apps by now"
              content="NextJS"
              customRel="noopener noreferrer"
            />
            ), aims to move all the rendering back to the server, serving
            exclusively static HTML pages, hydrating any interactivity only
            when/if necessary. While that's amazing for Lighthouse performance,
            it comes with its own sets of drawbacks (more on that in the next
            post).
          </p>
          {/* Further explanation about Fresh */}
          <p class="my-2 text-justify">
            Fresh uses Preact under the hood to compile the JSX/TSX files into
            static HTML that is then sent to the client. If you have experience
            with{" "}
            <GradientLink
              link="https://react.dev/"
              title="React, the open sourced UI library by Meta"
              content="React"
              customRel="noopener noreferrer"
            />{" "}
            or{" "}
            <GradientLink
              link="https://www.solidjs.com/"
              title="It's like React, but fun and doesn't offer nearly as many options to blow your feet out!"
              content="Solid"
              customRel="noopener noreferrer"
            />
            , you shouldn't have any trouble adapting, especially if you have
            experience building Full Stack projects.
          </p>
          {/* Main content start */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            Creating A Theme Switcher
          </h2>
          <p class="my-2 text-justify">
            Let's create a very simple Theme Switcher:
          </p>
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
          <p class="text-justify">
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
          <p class="my-2 text-justify">
            We have added a reference to the{" "}
            <code class="shj-lang-js">
              useEffect()
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
          <p class="text-justify">
            What the{" "}
            <code class="shj-lang-js">
              useEffect()
            </code>{" "}
            does, in order:
          </p>
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            {/* Explanation part 1 */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              Runs on start, checks if there is a theme saved (if not,{" "}
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
            </li>
            {/* Explanation part 2 */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              After setting the{" "}
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
            </li>
            {/* Explanation part 3 */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              (Optional) If the{" "}
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
            </li>
          </ol>
          {/* Linking to repository version */}
          <p class="my-2 text-justify">
            This website uses an improved version of the same Theme Switcher
            created in this post, which you can check the source code for{" "}
            <GradientLink
              link="https://github.com/TheYuriG/deno-portfolio/blob/0051fc7369f714a7562d303f760e148efc753ea4/islands/ThemeSwitcher.tsx"
              title="It's a trip down memory lane"
              content="right here"
              customRel="noopener noreferrer"
            />.
          </p>
          {/* Conclusion and link to next post */}
          <h2 class="custom-underline-thick hover:custom-tx-ac text-3xl my-2 f-as">
            What's next?
          </h2>
          <p class="my-2 text-justify">
            If you have been following along, you might have noticed a few
            issues with it, like flickering on first load or the inability to
            check for user preferences. Let's address those problems on those on
            the{" "}
            <GradientLink
              link="/blog/stopping-theme-flickering-deno-fresh"
              title="Part 2 of this blog post. Please click, it has really good information!"
              content="next blog post"
              newTab={false}
              customRel="next"
            />.
          </p>
          {/* Post author */}
          <footer class="mt-auto w-full text-right text-sm">
            Written with 💞 by TheYuriG
          </footer>
        </article>
      </Base>
    </>
  );
}
