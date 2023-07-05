//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../../components/UI/GreekList.tsx";
//? Display a link to view the source code on GitHub
import { ViewOnGitHub } from "../../components/misc/ViewOnGithub.tsx";
//? Import posts
import { createFreshThemeSwitcher as postSummary } from "../../data/blog/how-create-theme-switcher-deno-fresh.ts";
import { stopThemeFlickering as nextPost } from "../../data/blog/stopping-theme-flickering-deno-fresh.ts";

const googleLightDarkImage =
  "https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/skKcjSv1gMQRYk1AdEp7.png?auto=format&w=1600";

export default function Home() {
  return (
    <>
      <CustomHead
        title={postSummary.title}
        description={postSummary.shortSummary}
        imageLink={googleLightDarkImage}
        link={"https://www.theyurig.com" + postSummary.link}
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <NavigationButtons
          back={{ title: "Browse more blog posts", link: "/blog" }}
          next={{
            title: nextPost.title,
            link: nextPost.link,
          }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>
          {/* Blog post opening image */}
          <img
            src={googleLightDarkImage}
            alt="Sun and Moon montage with the words Light and Dark accompanying them"
            title="To many people, themes are an important part of the User Experience"
            class="my-4 min-h-40 h-60 w-72 sm:w-max object-cover"
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
          <StyledSubHeader title="What is Fresh?" />
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
          <StyledSubHeader title="Creating A Theme Switcher" />
          <p class="my-2 text-justify self-start">
            Let's create a very simple Theme Switcher:
          </p>
          {/* Code block with initial implementation */}
          <div class="shl-block self-start">
            <span class="shl-cmnt">
              // /islands/ThemeSwitcher.tsx{`
`}
            </span>
            <span class="shl-kwd">import</span>{" "}
            &#123; useState<span class="shl-oper">,</span> useEffect &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">'preact/hooks'</span>;{`
`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span>{" "}
            <span class="shl-kwd">function</span>{" "}
            <span class="shl-class">ThemeSwitcher</span>() &#123;{`
    `}
            <span class="shl-kwd">const</span>{" "}
            [theme<span class="shl-oper">,</span> setTheme]{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-func">useState</span>(<span class="shl-str">
              'Dark'
            </span>);{`

    `}
            <span class="shl-func">useEffect</span>((){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
		`}
            <span class="shl-kwd">const</span>{" "}
            cssRoot<span class="shl-oper">:</span>{" "}
            <span class="shl-class">HTMLElement</span>{" "}
            <span class="shl-oper">|</span> <span class="shl-num">null</span>
            {" "}
            <span class="shl-oper">=</span>{" "}
            document<span class="shl-oper">.</span>
            <span class="shl-func">querySelector</span>(<span class="shl-str">
              ':root'
            </span>);{`
		`}
            <span class="shl-kwd">if</span> (cssRoot{" "}
            <span class="shl-oper">!==</span>{" "}
            <span class="shl-num">null</span>) &#123;{`
			`}
            <span class="shl-kwd">if</span> (theme{" "}
            <span class="shl-oper">===</span>{" "}
            <span class="shl-str">'Light'</span>) &#123;{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--base-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(203 213 225)'</span>);{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--neutral-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(15 23 42)'</span>);{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--accent-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(220 38 38)'</span>);{`
			`}&#125; <span class="shl-kwd">else</span> &#123;{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--base-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(15 23 42)'</span>);{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--neutral-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(203 213 225)'</span>);{`
				`}cssRoot<span class="shl-oper">.</span>style<span class="shl-oper">
              .
            </span>
            <span class="shl-func">setProperty</span>(<span class="shl-str">
              '--accent-color'
            </span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'rgb(126 34 206)'</span>);{`
			`}&#125;{`
		`}&#125;{`
	`}&#125;<span class="shl-oper">,</span> [theme]);{`

    `}
            <span class="shl-kwd">const</span>{" "}
            themes<span class="shl-oper">:</span> string[]{" "}
            <span class="shl-oper">=</span> [<span class="shl-str">'Dark'</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-str">'Light'</span>];{`

    `}
            <span class="shl-kwd">return</span> ({`
		`}
            <span class="shl-oper">&lt;&gt;</span>
            {`
			`}&#123;themes<span class="shl-oper">.</span>
            <span class="shl-func">map</span>((themeOption){" "}
            <span class="shl-kwd">=&gt;</span> ({`
				`}
            <span class="shl-oper">&lt;</span>label{" "}
            <span class="shl-kwd">for</span>
            <span class="shl-oper">
              =
            </span>&#123;themeOption&#125;<span class="shl-oper">&gt;</span>
            {`
					`}
            <span class="shl-oper">&lt;</span>input{`
						`}
            <span class="shl-kwd">class</span>
            <span class="shl-oper">=</span>
            <span class="shl-str">"mr-1"</span>
            {`
						`}type<span class="shl-oper">=</span>
            <span class="shl-str">"radio"</span>
            {`
						`}id<span class="shl-oper">=</span>&#123;themeOption&#125;{`
						`}name<span class="shl-oper">=</span>
            <span class="shl-str">"theme"</span>
            {`
						`}checked<span class="shl-oper">=</span>&#123;theme{" "}
            <span class="shl-oper">==</span> themeOption&#125;{`
						`}onClick<span class="shl-oper">=</span>&#123;(){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
							`}
            <span class="shl-func">setTheme</span>(themeOption);{`
						`}&#125;&#125;{`
					`}
            <span class="shl-oper">&gt;&lt;/</span>input<span class="shl-oper">
              &gt;
            </span>
            {`
					`}&#123;themeOption&#125;{`
				`}
            <span class="shl-oper">&lt;/</span>label<span class="shl-oper">
              &gt;
            </span>
            {`
			`}))&#125;{`
		`}
            <span class="shl-oper">&lt;/&gt;</span>
            {`
	`});{`
`}&#125;
          </div>
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/deno_create_theme_switcher/islands/basicThemeSwitcher.tsx" />
          {/* Initial implementation explanation */}
          <p class="text-justify">
            This creates a radio input that has{" "}
            <code class="shl-inline">
              Dark
            </code>{" "}
            selected by default and allows you to toggle between modes.
            Switching themes will toggle between the Light and the Dark versions
            of the theme for this blog, now let's make sure we can save the
            changes when the user clicks either input. Feel free to replace the
            values of{" "}
            <code class="shl-inline">
              --base-color
            </code>
            ,{" "}
            <code class="shl-inline">
              --neutral-color
            </code>
            , and{" "}
            <code class="shl-inline">
              --accent-color
            </code>{" "}
            with the values for your theme.
          </p>
          {/* Improved implementation with localStorage */}
          <div class="shl-block self-start">
            <span class="shl-cmnt">
              // /islands/ThemeSwitcher.tsx (updated){`
`}
            </span>
            <span class="shl-kwd">import</span>{" "}
            &#123; useEffect<span class="shl-oper">,</span>{" "}
            useRef<span class="shl-oper">,</span> useState &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"preact/hooks"</span>;{`
`}
            <span class="shl-oper">...</span>
            {`
`}
            <span class="shl-kwd">const</span> isInitialMount{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-func">useRef</span>(<span class="shl-bool">
              true
            </span>);{`

`}
            <span class="shl-func">useEffect</span>((){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-kwd">const</span> savedTheme{" "}
            <span class="shl-oper">=</span>{" "}
            localStorage<span class="shl-oper">.</span>
            <span class="shl-func">getItem</span>(<span class="shl-str">
              "theme"
            </span>){`

    `}
            <span class="shl-kwd">if</span>{" "}
            (isInitialMount<span class="shl-oper">.</span>current{" "}
            <span class="shl-oper">===</span>{" "}
            <span class="shl-bool">true</span>) &#123;{`
        `}
            <span class="shl-kwd">if</span> (savedTheme{" "}
            <span class="shl-oper">!==</span> <span class="shl-num">null</span>
            {" "}
            <span class="shl-oper">&amp;&amp;</span> savedTheme{" "}
            <span class="shl-oper">!==</span> theme)&#123;{`
            `}
            <span class="shl-func">setTheme</span>((){" "}
            <span class="shl-kwd">=&gt;</span> savedTheme){`
            `}
            <span class="shl-kwd">return</span>
            {`
        `}&#125;{`

      `}isInitialMount<span class="shl-oper">.</span>current{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-bool">false</span>;{`
      `}
            <span class="shl-kwd">return</span>;{`
    `}&#125;{`
    `}localStorage<span class="shl-oper">.</span>
            <span class="shl-func">setItem</span>(<span class="shl-str">
              "theme"
            </span>
            <span class="shl-oper">,</span> theme);{`
`}
            <span class="shl-oper">...</span>
          </div>
          <ViewOnGitHub githubLink="https://github.com/TheYuriG/blog_lessons/blob/master/deno_create_theme_switcher/islands/updatedThemeSwitcher.tsx" />
          {/* Second code block explanation */}
          <p class="my-2 text-justify">
            We have added a reference to the{" "}
            <code class="shl-inline">
              useEffect()
            </code>{" "}
            to avoid having it saving the current{" "}
            <code class="shl-inline">
              theme
            </code>{" "}
            to{" "}
            <code class="shl-inline">
              localStorage
            </code>{" "}
            on the first render.
          </p>
          <p class="text-justify self-start">
            What the{" "}
            <code class="shl-inline">
              useEffect()
            </code>{" "}
            does, in order:
          </p>
          <GreekList
            items={[
              <p>
                Runs on start, checks if there is a theme saved (if not,{" "}
                <code class="shl-inline">
                  savedTheme
                </code>{" "}
                will be{" "}
                <code class="shl-inline">
                  null
                </code>
                ), and sets the current theme as the{" "}
                <code class="shl-inline">
                  savedTheme
                </code>
                , if they are different, then stops (remember that{" "}
                <code class="shl-inline">
                  useEffect()
                </code>{" "}
                is using the{" "}
                <code class="shl-inline">
                  theme
                </code>{" "}
                as a dependency so not returning here would cause an infinite
                loop!).
              </p>,
              <p>
                After setting the{" "}
                <code class="shl-inline">
                  theme
                </code>{" "}
                equal to{" "}
                <code class="shl-inline">
                  localStorage
                </code>'s{" "}
                <code class="shl-inline">
                  savedTheme
                </code>{" "}
                is the same as the{" "}
                <code class="shl-inline">
                  theme
                </code>
                , it will skip the first{" "}
                <code class="shl-inline">
                  if
                </code>{" "}
                check and negate the{" "}
                <code class="shl-inline">
                  isInitialMount
                </code>{" "}
                value and stop.
              </p>,
              <p>
                (Optional) If the{" "}
                <code class="shl-inline">
                  theme
                </code>{" "}
                is updated, it will skip both{" "}
                <code class="shl-inline">
                  if
                </code>{" "}
                checks, save the theme to{" "}
                <code class="shl-inline">
                  localStorage
                </code>
                , and applies it.
              </p>,
            ]}
          />
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
          <StyledSubHeader title="What's next?" />
          <p class="my-2 text-justify">
            If you have been following along, you might have noticed a few
            issues with it, like flickering on first load or the inability to
            check for user preferences. Let's address those problems on those on
            the{" "}
            <GradientLink
              link={nextPost.link}
              title={nextPost.title}
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
