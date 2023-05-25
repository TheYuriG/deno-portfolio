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
            How to stop Theme flickering in Fresh
          </h2>
          {/* Post creation date */}
          <p class="post-date">
            {new Date(1684951466007).toLocaleString()}
          </p>
          {/* Blog post opening image */}
          <img
            src="https://media.giphy.com/media/l0HlKQQ8STZUREvE4/giphy.gif"
            alt="Lights flickering in a Stranger Things scene"
            title="Wouldn't it be better if the lights would just stay on?"
            class="large-image"
          />
          {/* Introduction */}
          <p class="space">
            In the{" "}
            <a
              class="gradient-underline pretty-link"
              href="/blog/how-create-theme-switcher-deno-fresh"
              target="_blank"
            >
              previous post
            </a>
            , we built a simple Theme Switcher using Preact and Fresh on top of
            Deno. Two things were missing in that implementation we are going to
            fix both of them now:
          </p>
          {/* Presenting the problem */}
          <p class="space">
            To understand how to fix both of those problems, we first need to
            understand why they happened in the first place.
          </p>
          {/* Heading and image introducing to next topic */}
          <h2 class="subtopic">The Island Architecture</h2>
          <img
            src="https://images.unsplash.com/photo-1602400546471-b8efe700c80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80"
            alt="Picture of Seychelles, by Kamil Rogalinski"
            title="Small bits where the interesting things happens, surrounded by nothingness"
            class="large-image"
            style="height: 25em;"
          />
          {/* Explaining topic */}
          <p class="space">
            The{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://www.patterns.dev/posts/islands-architecture"
              target="_blank"
              rel="noopener noreferrer"
            >
              Islands Architecture
            </a>{" "}
            is a very interesting design pattern. You serve static HTML content
            (the "ocean") to the client's browser and only hydrate a little of
            Javascript (the "island") in specific portions of the User
            Interface, upon user request. By default, this approach will never
            ship any Javascript to the client, essentially creating zero
            overhead on served pages, which leads to more performant pages with
            higher Lighthouse scores.
          </p>
          <img
            src="https://remix.run/remix-v1.jpg"
            alt="Remix's logo"
            title="The precursor"
          />
          <p class="space">
            Fresh wasn't the first to come up with this idea, mind you.{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://remix.run/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Remix
            </a>{" "}
            (from the same creators of{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://reactrouter.com/en/main/start/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router
            </a>{" "}
            (!))had already started working on this in early 2022, they even
            tried to sell a license to use the framework, which{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://twitter.com/remix_run/status/1460652199269179393"
              target="_blank"
              rel="noopener noreferrer"
            >
              didn't work well
            </a>{" "}
            for them.
          </p>
          {/* Further insight into the problem */}
          <p class="space">
            So by now, you might have realized that not shipping Javascript by
            default has its drawbacks. If the page first needs to load before it
            can download the Javascript to change the theme colors, then we
            can't have our theme applied from the get-go, with no choice but to
            have our clients have to put up with the flickering, right? Well,
            not exactly...
          </p>
          {/* Main content start */}
          <h2 class="subtopic">Opting out of the Islands Architecture</h2>
          <p class="space">
            It's possible that we can ship the required Javascript on every
            page, but in doing so, you need to understand the tradeoffs:
          </p>
          <ol style="align-self: start;">
            <li>
              1 &#183; You introduce consistent overhead to every page load,
              which will progressively worsen your Lighthouse page performance
              score, the more you do it.
            </li>
            <li>
              2 &#183; You are deviating from the main design choice for the
              framework, which means that you will not find a lot of resources
              to do things this way from this point onwards. If you have
              questions, you will have to mostly figure something out by
              yourself.
            </li>
          </ol>
          <p class="space">
            At this point, I have to ask you: Is this feature essential for your
            project? Is the design of your website impossible to be done in a
            happy medium between Light and Dark modes? If the answer to both of
            these questions is "yes", we can now start looking into how to break
            the rules.
          </p>
          {/* Script tag warning */}
          {/*  */}
          <h2 className="subtopic">Adding a script file to every response</h2>
          <p className="space">
            Be very careful about the <code class="shj-lang-js">script</code>
            {" "}
            tags that you import on your project. Not knowing what you are doing
            can leave you (and your users) vulnerable to{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://en.wikipedia.org/wiki/Cross-site_scripting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cross Site Scripting
            </a>{" "}
            attacks (XSS, for short). Make sure that you properly review any
            code that suggests using these and, if in doubt, don't use them in
            your project!
          </p>
          <p className="space">
            In our case, our implementation is incredibly simple. We just add a
            small script to the response's{" "}
            <code class="shj-lang-js">&lt;head&gt;</code>{" "}
            that checks if the user has a theme saved in{" "}
            <code class="shj-lang-js">localStorage</code>{" "}
            and if they don't, we try to apply their OS-preferred color scheme.
            Let's have a look:
          </p>
          {/* Code block with initial implementation */}
          <div class="shj-lang-js">
            {`// /routes/index.tsx (but can be any page)
export default function Home() {
    return (
        <>
            <Head>
                // must not be deferred/module to stop flickering!
                <script src="/themeSwitcher.js"></script>
            </Head>
            // your page response body goes here
        </>
    );
}`}
          </div>
          <p className="space">And inside the script file:</p>
          <div class="shj-lang-js">
            {`// /static/themeSwitcher.js
const selectedTheme = localStorage.getItem("theme");
if (selectedTheme === null) {
    window.showDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("theme", window.showDarkMode ? "Dark" : "Light");
} else {
    window.showDarkMode = selectedTheme === "Dark";
}
const cssRoot = document.querySelector(":root");
if (window.showDarkMode === true) {
    cssRoot.style.setProperty("--base-color", "rgb(15 23 42)");
    cssRoot.style.setProperty("--neutral-color", "rgb(203 213 225)");
    cssRoot.style.setProperty("--accent-color", "rgb(126 34 206)");
} else {
    cssRoot.style.setProperty("--base-color", "rgb(203 213 225)");
    cssRoot.style.setProperty("--neutral-color", "rgb(15 23 42)");
    cssRoot.style.setProperty("--accent-color", "rgb(220 38 38)");
}`}
          </div>
          <p className="space">In order:</p>
          <ol style="align-self: start;">
            <li>
              1 &#183; Check if there is a theme already saved on{" "}
              <code class="shj-lang-js">localStorage</code>. If there isn't one,
              check what's the user preferred color scheme, save it, and set
              {" "}
              <code class="shj-lang-js">
                window.showDarkMode
              </code>
              . If there is, you just set{" "}
              <code class="shj-lang-js">window.showDarkMode</code>{" "}
              on/off based on the saved theme.
            </li>
            <li>
              2 &#183; Check window.showDarkMode and apply the colors to the
              {" "}
              <code class="shj-lang-js">root</code>{"  "}
              element for either mode based on that being{" "}
              <code class="shj-lang-js">
                true
              </code>{" "}
              or{" "}
              <code class="shj-lang-js">
                false
              </code>
              .
            </li>
          </ol>
          <p className="space">
            Now all we gotta do is update our component and we are done!
          </p>
          <div class="shj-lang-js">
            {`// /islands/themeSwitcher.tsx (updated)
...
const [theme, setTheme] = useState(
    // @ts-ignore This property gets set by themeSwitcher.js in <Head>
    window.showDarkMode === true ? "Dark" : "Light",
);

useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    ...
}
...`}
          </div>
          <p className="space">
            Because{" "}
            <code class="shj-lang-js">
              window.showDarkMode
            </code>{" "}
            is set within the response's{" "}
            <code class="shj-lang-js">&lt;head&gt;</code>
            , Typescript doesn't know that it exists and will give you a
            warning, hence the suppression above. Since your{" "}
            <code class="shj-lang-js">useEffect()</code>{" "}
            no longer needs to set the theme based on what is saved on{" "}
            <code class="shj-lang-js">localStorage</code>, we can remove that
            bit too, leaving the initial check to only validate if it's the
            first run and skip when it is.
          </p>
          <p className="space">
            So there you have it, a Theme Switcher that sets the correct theme,
            acknowledges the user's preferences, and doesn't flicker on the
            initial load.
          </p>
          {/* Alternative options to this */}
          <h2 className="subtopic">
            Alternatives to using script tags
          </h2>
          <p className="space">
            What other ways could you possibly implement a Theme Switcher
            without needing to script files on every request?
          </p>
          {/* Route based */}
          <p className="space">
            One of the options would be to use route-based theming. You could
            create your entire website nested in either a{" "}
            <code class="shj-lang-js">
              /light
            </code>{" "}
            or{" "}
            <code class="shj-lang-js">
              /dark
            </code>{" "}
            route (or better yet, a single{" "}
            <code class="shj-lang-js">
              /[theme]
            </code>{" "}
            route!), and have your index redirect to either of those based on
            their OS color-scheme preference. The drawback to this approach is
            that you can't give the users a pretty theme transition when they
            switch themes, since that will force an entire page reload when they
            get redirected, but regardless, it's still a possibility that you
            could implement.
          </p>
          {/* App router, but maybe just use NextJS instead? */}
          <p className="space">
            Another option would be to not save the theme to{" "}
            <code class="shj-lang-js">
              localStorage
            </code>{" "}
            and also never redirect, essentially turning your application into a
            SPA, making your users navigate through pages using{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://reactrouter.com/en/main/start/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router
            </a>{" "}
            instead. The drawback to this approach would be to have the theme
            reset on every visit, which would be annoying if people had to come
            back to your website regularly. If you are just creating a portfolio
            website that is meant for recruiters to check once and dip, that is
            not a big deal, but for a blogging website (like this one!), it's
            pretty much unacceptable. This option also isn't really what Fresh
            is going for either, so at this point you might as well just use
            another framework entirely instead, maybe even going full{" "}
            <a
              class="gradient-underline pretty-link"
              href="https://vercel.com/templates/next.js/nextjs-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS + React
            </a>{" "}
            instead.
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
