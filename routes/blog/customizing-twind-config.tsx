//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
import { StyledMiniHeader } from "../../components/UI/StyledMiniHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? Link components to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
import { DottedLink } from "../../components/UI/DottedLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../../components/UI/GreekList.tsx";
//? Import the default post footer
import { BlogPostFooter } from "../../components/blog/BlogPostFooter.tsx";
//? Import post summary
import { freshTwindV0 as previousPost } from "../../data/blog/fresh-twind-v0.ts";
import { customizingTwindConfig as postSummary } from "../../data/blog/customizing-fresh-twind.ts";
import { experienceDenoFreshPost } from "../../data/blog/experience-deno-fresh.ts";
//? Add a button to scroll to the top on the bottom right corner of the page
import ScrollToTop from "../../islands/misc/ScrollToTop.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title={postSummary.title}
        description={postSummary.shortSummary}
        link={"https://www.theyurig.com" + postSummary.link}
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <NavigationButtons
          back={{ title: previousPost.title, link: previousPost.link }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title={postSummary.title} />
          {/* Post creation date */}
          <p class="text-sm mb-2 w-full text-center">
            {new Date(postSummary.date).toLocaleString()}
          </p>
          {/* Introduction */}
          <p class="my-2 text-justify">
            This is the third post in a series about{" "}
            <DottedLink
              content="my experience with Deno"
              link={experienceDenoFreshPost.link}
            />{" "}
            and the{" "}
            <DottedLink
              content="problems with Twind v0"
              link={previousPost.link}
            />. This post won't be negative like the previous two and will,
            instead, offer advice on how to configure your Twind configuration
            file to make it work for you, instead of letting it work against
            you.
          </p>
          <p class="my-2 text-justify">
            This post assumes you know how to write pure CSS to extend your
            Twind config. It won't teach you how to write CSS, but you should
            have a decent grasp of it if you are used to Tailwind/Twind utility
            classes.
          </p>

          {/* Figuring out which version of Twind you have */}
          <StyledSubHeader
            title="Figuring out which version of Twind you have"
            id="current-twind-version"
          />
          {/* Before you start */}
          <p class="my-2 text-justify">
            The first thing you need to do before starting to configure your
            {" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file is checking what version of Twind do you have running. The
            configuration for both is different, so that's something you need to
            know before we even do anything.
          </p>
          {/* How to check current Twind version */}
          <p class="my-2 text-justify">
            Check the <span class="shl-inline">main.ts</span>{" "}
            file on the root of your project and see where{" "}
            <span class="shl-inline">twindPlugin</span> is imported from.
          </p>

          {/* Identifying Twind v0 */}
          <StyledMiniHeader title="Twind v0" />
          {/* Twind v0 import */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> twindPlugin{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twind.ts"</span>;
          </div>
          <p class="my-2 text-justify self-start">
            If it's imported from{" "}
            <span class="shl-inline">$fresh/plugins/twind.ts</span>{" "}
            (not versioned), then you have{" "}
            <DottedLink content="Twind v0" link="#configuring-twind-v0" />.
          </p>
          {/* Please upgrade to Twind v1 */}
          <p class="my-2 text-justify">
            <strong>WARNING!</strong> If you still are on Twind v0, I{" "}
            <strong>highly</strong>{" "}
            that you upgrade to Twind v1 first, before extending your{" "}
            <span class="shl-inline">$fresh/plugins/twind.ts</span>{" "}
            file. That way, you can start using the stable version without
            having to put yourself through the{" "}
            <DottedLink
              content="pain that is using Twind v0"
              link={previousPost.link}
            />{" "}
            and neither you need to suffer through migration later. Migrating a
            non-customized
            <span class="shl-inline">$fresh/plugins/twind.ts</span>{"  "}
            file is incredibly easy and will take you 10 seconds to do.
            Regardless, if you choose to ignore this advice for whatever reason,
            this blog post will cover how to extend both versions of Twind.
          </p>

          {/* Identifying Twind v1 */}
          <StyledMiniHeader title="Twind v1" />
          {/* Twind v1 import */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> twindPlugin{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twindv1.ts"</span>;
          </div>
          <p class="my-2 text-justify self-start">
            If it's imported from{" "}
            <span class="shl-inline">
              $fresh/plugins/twind<strong class="underline">v1</strong>.ts
            </span>{" "}
            (versioned), then you have{" "}
            <DottedLink content="Twind v1" link="#configuring-twind-v1" />.
          </p>

          {/* Configuring Twind v0 */}
          <StyledSubHeader
            title="Configuring Twind v0"
            id="configuring-twind-v0"
          />
          <p class="my-2 text-justify">
            Let's go through the most common configurations people use for their
            CSS: animations, keyframes and classes. If you never edited your
            {" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            before, it should look something like this:
          </p>
          {/* Base Twind v0 configuration */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> &#123;{" "}
            <span class="shl-class">Options</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twind.ts"</span>;{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125; <span class="shl-kwd">as</span> <span class="shl-class">Options</span>;
          </div>

          <StyledMiniHeader
            title="Adding Twind v0 animations and keyframes"
            id="v0-animations"
          />
          {/* Creating CSS objects */}
          <p class="my-2 text-justify">
            Now to add functionality to this, let's be smart and work in a way
            that will make your life easier if you ever choose to migrate to
            Twind v1 later. Create 2 new objects, one will hold your CSS
            animation and the other will hold your CSS keyframes. You can do so
            just below the <span class="shl-inline">import</span>.
          </p>

          {/* Animation and Keyframe objects */}
          <div class="shl-block">
            <span class="shl-kwd">const</span> customTwindAnimations{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"fade-in 0.5s"</span>
            <span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-kwd">const</span> customTwindKeyframes{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}
            <span class="shl-str">"0%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">0</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
    `}
            <span class="shl-str">"100%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">1</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          {/* How to add animation and keyframes to the twind.config.js file */}
          <p class="my-2 text-justify">
            Now, other than the <span class="shl-inline">selfURL</span>, your
            {" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file also needs to export a <span class="shl-inline">theme</span>
            {" "}
            object with <span class="shl-inline">extend</span>{" "}
            property that has 2 nested properties:{" "}
            <span class="shl-inline">animation</span> and{" "}
            <span class="shl-inline">keyframes</span>. You can assign the value
            of your <span class="shl-inline">customTwindAnimations</span> and
            {" "}
            <span class="shl-inline">customTwindKeyframes</span>{" "}
            objects to these nested properties and save your file. Your{" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            should look something like this now:
          </p>

          {/* Final twind.config.js file */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> &#123;{" "}
            <span class="shl-class">Options</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twind.ts"</span>;{`

`}
            <span class="shl-kwd">const</span> customTwindAnimations{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"fade-in 0.5s"</span>
            <span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-kwd">const</span> customTwindKeyframes{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}
            <span class="shl-str">"0%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">0</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
    `}
            <span class="shl-str">"100%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">1</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`


`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
  `}theme<span class="shl-oper">:</span> &#123;{`
    `}extend<span class="shl-oper">:</span> &#123;{`
      `}animation<span class="shl-oper">:</span>{" "}
            customTwindAnimations<span class="shl-oper">,</span>
            {`
      `}keyframes<span class="shl-oper">:</span>{" "}
            customTwindKeyframes<span class="shl-oper">,</span>
            {`
      `}&#125;<span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125; <span class="shl-kwd">as</span> <span class="shl-class">Options</span>;
          </div>

          <StyledMiniHeader title="Adding Twind v0 classes" id="v0-classes" />
          <p class="my-2 text-justify">
            Adding custom <span class="shl-inline">classes</span>{" "}
            to your Twind config is similar to adding{" "}
            <span class="shl-inline">animations</span> and{" "}
            <span class="shl-inline">keyframes</span>, but you use a{" "}
            <span class="shl-inline">plugins</span> object instead of a{" "}
            <span class="shl-inline">theme</span> with an{" "}
            <span class="shl-inline">extend</span>{" "}
            property and nested properties. Once again, start with creating the
            object that will hold all the CSS{" "}
            <span class="shl-inline">classes</span>:
          </p>
          {/* Class object */}
          <div class="shl-block">
            <span class="shl-kwd">const</span> customTwindClasses{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"transform-center"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}transform<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"translate(-50%, -50%)"</span>
            <span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          {/* How to add classes to the twind.config.js file */}
          <p class="my-2 text-justify">
            Now your <span class="shl-inline">twind.config.js</span>{" "}
            file also needs to export a <span class="shl-inline">plugins</span>
            {" "}
            object which value will be the{" "}
            <span class="shl-inline">classes</span>{" "}
            you want to add to your Twind configuration. Your file with{" "}
            <span class="shl-inline">classes</span> should look like this:
          </p>
          {/* Twind config with classes */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> &#123;{" "}
            <span class="shl-class">Options</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twind.ts"</span>;{`

`}
            <span class="shl-kwd">const</span> customTwindClasses{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"transform-center"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}transform<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"translate(-50%, -50%)"</span>
            <span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
  `}plugins<span class="shl-oper">:</span>{" "}
            customTwindClasses<span class="shl-oper">,</span>
            {`
`}&#125; <span class="shl-kwd">as</span> <span class="shl-class">Options</span>;
          </div>
          {/* Mix and match animation/keyframes + classes */}
          <p class="my-2 text-justify">
            You can have both keyframes and animations with classes all together
            in the same <span class="shl-inline">twind.config.js</span>{" "}
            file. I stripped them to different code blocks only to have them
            focused in this tutorial, but mix and match to your heart's content.
          </p>

          <StyledMiniHeader title="Advanced Twind v0 configuration" />
          {/* Multiple nested classes */}
          <p class="my-2 text-justify">
            If you have classes that are similar in nature, but slightly
            different, you can also nest them with a prefix, since Twind creates
            classes dynamically if you provide a function as the object property
            value. See the following example:
          </p>
          {/* Multiple nested classes code example */}
          <div class="shl-block">
            <span class="shl-kwd">import</span> &#123;{" "}
            <span class="shl-class">Options</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"$fresh/plugins/twind.ts"</span>;{`

`}
            <span class="shl-kwd">const</span> customTwindDynamicClasses{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"custom-font-scale"</span>
            <span class="shl-oper">:</span>{" "}
            ([fontSize]<span class="shl-oper">:</span>{" "}
            <span class="shl-class">Array</span>
            <span class="shl-oper">&lt;</span>string<span class="shl-oper">
              &gt;
            </span>) <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-kwd">switch</span> (fontSize) &#123;{`
      `}
            <span class="shl-kwd">case</span>{" "}
            <span class="shl-str">"largest"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(2rem, 4dvw, 4rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
      `}
            <span class="shl-kwd">case</span>{" "}
            <span class="shl-str">"large"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.5rem, 3dvw, 3rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
      `}
            <span class="shl-kwd">case</span> <span class="shl-str">"big"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.25rem, 2.5dvw, 2.5rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
  `}plugins<span class="shl-oper">:</span>{" "}
            customTwindDynamicClasses<span class="shl-oper">,</span>
            {`
`}&#125; <span class="shl-kwd">as</span> <span class="shl-class">Options</span>;
          </div>
          {/* Nested classes usage suggestion */}
          <p class="my-2 text-justify">
            This example creates the{" "}
            <span class="shl-inline">custom-font-scale-largest</span>,{" "}
            <span class="shl-inline">custom-font-scale-large</span> and{" "}
            <span class="shl-inline">custom-font-scale-big</span>{" "}
            classes that I use on this blog (inspect the{" "}
            <span class="shl-inline">&lt;h1&gt;</span>,{" "}
            <span class="shl-inline">&lt;h2&gt;</span> and{" "}
            <span class="shl-inline">&lt;h3&gt;</span>{" "}
            elements on this page to see this example being applied). You can
            infinitely nest classes with this function form if you want to. It's
            very useful if you want to create custom classes for a component
            with a single prefix for everything, so that your team knows that
            they are not from a component library, but custom tailored by a
            member.
          </p>

          {/* Configuring Twind v1 */}
          <StyledSubHeader
            title="Configuring Twind v1"
            id="configuring-twind-v1"
          />
          {/* Basic Twind v1 config */}
          <p class="my-2 text-justify">
            The <span class="shl-inline">twind.config.js</span>{" "}
            configuration file for Twind v1 is different from Twind v0. One of
            the key differences is that you no longer export{" "}
            <span class="shl-inline">theme</span> or{" "}
            <span class="shl-inline">extend</span>, but rather the result of
            {" "}
            <span class="shl-inline">defineConfig</span>. Either way, if you
            never changed your Twind v1{" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file, it should look like this:
          </p>
          {/* Base Twind v1 configuration */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          <StyledMiniHeader
            title="Adding Twind v1 animations and keyframes"
            id="v1-animations"
          />
          {/* Adding custom animations to Twind v1 */}
          <p class="my-2 text-justify">
            Twind v1 sees <span class="shl-inline">animations</span> and{" "}
            <span class="shl-inline">keyframes</span>{" "}
            as a single entity, unlike v0. Because of that, creating custom{" "}
            <span class="shl-inline">animations</span> and{" "}
            <span class="shl-inline">keyframes</span>{" "}
            is visually simpler to understand and parse, because they will be
            clustered together. They are also instantiated just like{" "}
            <span class="shl-inline">classes</span>
            are, which also helps keeping all your custom configuration in one
            single place. To start, create an array with nested arrays that have
            the first value as the animation class name and the second value as
            an object that has the animation CSS and the{" "}
            <span class="shl-inline">keyframes</span>. Check the example below:
          </p>
          {/* Custom Twind v1 animation code block */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-kwd">const</span> customTwindAnimations{" "}
            <span class="shl-oper">=</span> [{`
  `}[{`
    `}
            <span class="shl-str">"blinking"</span>
            <span class="shl-oper">,</span> &#123;{`
      `}animation<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"blinking 1.5s step-end infinite"</span>
            <span class="shl-oper">,</span>
            {`
      `}
            <span class="shl-str">"@keyframes blinking"</span>
            <span class="shl-oper">:</span> &#123;{`
        `}
            <span class="shl-str">"0%, 100%"</span>
            <span class="shl-oper">:</span> &#123;{`
          `}opacity<span class="shl-oper">:</span>{" "}
            <span class="shl-num">0</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;<span class="shl-oper">,</span>
            {`
        `}
            <span class="shl-str">"50%"</span>
            <span class="shl-oper">:</span> &#123;{`
          `}opacity<span class="shl-oper">:</span>{" "}
            <span class="shl-num">1</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;<span class="shl-oper">,</span>
            {`
      `}&#125;<span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}]<span class="shl-oper">,</span>
            {`
`}];{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span> [<span class="shl-oper">
              ...
            </span>customTwindAnimations]<span class="shl-oper">,</span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          <StyledMiniHeader
            title="Adding Twind v1 classes"
            id="v1-classes"
          />
          {/* Adding custom classes to Twind v1 */}
          <p class="my-2 text-justify">
            Adding your custom classes to Twind v1 is very simple, you just pass
            a <span class="shl-inline">rules</span> array as parameter to your
            {" "}
            <span class="shl-inline">defineConfig</span> function. Inside{" "}
            <span class="shl-inline">rules</span>, you provide another array
            with the first index being the custom class name and the second
            index being an object with all the CSS attributes you want that
            class to have.
          </p>
          {/* Twind v1 custom classes code block */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-kwd">const</span> customTwindClasses{" "}
            <span class="shl-oper">=</span> [{`
  `}[{`
    `}
            <span class="shl-str">"transform-center"</span>
            <span class="shl-oper">,</span> &#123;{`
      `}transform<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"translate(-50%, -50%)"</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}]<span class="shl-oper">,</span>
            {`
`}];{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span>{" "}
            [...customTwindClasses]<span class="shl-oper">,</span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          <StyledMiniHeader title="Advanced Twind v1 configuration" />
          {/* Multiple nested classes */}
          <p class="my-2 text-justify">
            If you have classes that are similar in nature, but slightly
            different, you can also nest them with a prefix, since Twind creates
            classes dynamically if you provide a function as the object property
            value. See the following example:
          </p>
          {/* Multiple nested classes code example */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-kwd">const</span> customTwindDynamicClasses{" "}
            <span class="shl-oper">=</span> [{`
  `}[<span class="shl-str">"custom-font-scale-"</span>
            <span class="shl-oper">,</span> (&#123; $$ &#125;){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-kwd">switch</span> ($$) &#123;{`
      `}
            <span class="shl-kwd">case</span>{" "}
            <span class="shl-str">"largest"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(2rem, 4dvw, 4rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
      `}
            <span class="shl-kwd">case</span>{" "}
            <span class="shl-str">"large"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.5rem, 3dvw, 3rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
      `}
            <span class="shl-kwd">case</span> <span class="shl-str">"big"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.25rem, 2.5dvw, 2.5rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
    `}&#125;{`
  `}&#125;]<span class="shl-oper">,</span>
            {`
`}];{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span> [<span class="shl-oper">
              ...
            </span>customTwindDynamicClasses]<span class="shl-oper">,</span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>
          {/* Nested classes usage suggestion */}
          <p class="my-2 text-justify">
            This example creates the{" "}
            <span class="shl-inline">custom-font-scale-largest</span>,{" "}
            <span class="shl-inline">custom-font-scale-large</span> and{" "}
            <span class="shl-inline">custom-font-scale-big</span>{" "}
            classes that I use on this blog (inspect the{" "}
            <span class="shl-inline">&lt;h1&gt;</span>,{" "}
            <span class="shl-inline">&lt;h2&gt;</span> and{" "}
            <span class="shl-inline">&lt;h3&gt;</span>{" "}
            elements on this page to see this example being applied). You can
            infinitely nest classes with this function form if you want to. It's
            very useful if you want to create custom classes for a component
            with a single prefix for everything, so that your team knows that
            they are not from a component library, but custom tailored by a
            member.
          </p>

          {/* Migrating to Twind v1 */}
          <StyledSubHeader
            title="Migrating to Twind v1"
            id="migrating-twind-v1"
          />
          <p class="my-2 text-justify">
            So you have decided to migrate to Twind v1? Congratulations! You are
            making a decision that will help you not increasing your technical
            debt. Twind v1 is quite stable and vastly superior to v0.
          </p>

          <StyledMiniHeader title="Updating your main.ts file" />
          {/* Updating main.ts is common to both upgrades */}
          <p class="my-2 text-justify">
            All you need to do in this file is change the import of{" "}
            <span class="shl-inline">twindPlugin</span> in your{" "}
            <span class="shl-inline">main.ts</span> file from{" "}
            <span class="shl-inline">$fresh/plugins/twind.ts</span> to{" "}
            <span class="shl-inline">$fresh/plugins/twindv1.ts</span>{" "}
            (notice how this one has the <strong>v1</strong>{" "}
            that the previous one didn't have).
          </p>

          <StyledMiniHeader title="Updating your unedited twind.config.js file" />
          {/* Easy migration of unedited configuration file */}
          <p class="my-2 text-justify">
            If you have never edited the configurations of your base{" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file, your work here will be very minimal. All you need to do is
            copy the 10 lines of code in the block at
            <DottedLink
              content="Configuring Twind v1"
              link="#configuring-twind-v1"
            />{" "}
            and replace your entire file content with that. You are done, save
            your files and feel free to customize your configuration file now.
          </p>

          <StyledMiniHeader title="Updating your customized twind.config.js file" />
          {/* Hard migration of customized configuration file */}
          <p class="my-2 text-justify">
            If you have previously added custom
            <span class="shl-inline">classes</span> or{" "}
            <span class="shl-inline">animations</span>{" "}
            to your Twind v0 file, things get a little more interesting, because
            you have breaking changes to resolve. I'll do my best to enable you
            to fix those breaking changes yourself.
          </p>
          {/* Easier migration if you customized using this guide */}
          <p class="my-2 text-justify">
            If your previous changes were following the tips from this post,
            your classes, animations and keyframes are stored on separate
            objects, which will make this upgrade easier for you.
          </p>
          {/* Starting migration */}
          <p class="my-2 text-justify">
            First, delete everything from your{" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file, EXCEPT your custom CSS objects (with{" "}
            <span class="shl-inline">animations</span>,{" "}
            <span class="shl-inline">
              keyframes
            </span>{" "}
            and <span class="shl-inline">classes</span>
            ), just comment those out for now. Now copy the 10 lines of code in
            the block at{" "}
            <DottedLink
              content="Configuring Twind v1"
              link="#configuring-twind-v1"
            />{" "}
            and paste that below your commented objects.
          </p>
          {/* Continuing migration */}
          <p class="my-2 text-justify">
            Below{" "}
            <span class="shl-inline">presets</span>, but still within the object
            passed to{" "}
            <span class="shl-inline">defineConfig</span>, add another property
            named{" "}
            <span class="shl-inline">rules</span>. This requires an array of
            arrays, with the first index being a string with the name of the
            class you are creating and the second being an object with the CSS
            properties and values of said class.
          </p>
          {/* Converting v0 classes to v1 */}
          <p class="my-2 text-justify">
            To convert your old v0 classes to v1 classes, you can simply wrap up
            your old classes with{" "}
            <span class="shl-inline">Object.entries(yourOldClasses)</span>{" "}
            and pass the result of that as a spread to the array required by
            {" "}
            <span class="shl-inline">rules</span>.
          </p>
          {/* Converting classes code block */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-kwd">const</span> twindV0Class{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"transform-center"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}transform<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"translate(-50%, -50%)"</span>
            <span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`
`}
            <span class="shl-kwd">const</span> newAndImprovedTwindV1Class{" "}
            <span class="shl-oper">=</span>{" "}
            <span class="shl-class">Object</span>
            <span class="shl-oper">.</span>
            <span class="shl-func">entries</span>(twindV0Class);{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span> [<span class="shl-oper">
              ...
            </span>newAndImprovedTwindV1Class]<span class="shl-oper">,</span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          {/* Converting animations is harder */}
          <p class="my-2 text-justify">
            Things get a little more complicated when you have to convert your
            animations and keyframes to a single class, because there isn't a
            simple way to merge both objects into one array with the proper
            format, so you gonna have to do some manual rewriting yourself, but
            it's fairly simple.
          </p>
          {/* Converting v0 animations to v1 */}
          <p class="my-2 text-justify">
            Regardless, what you need is a class that has the{" "}
            <span class="shl-inline">animation</span>{" "}
            CSS as the first property and then the following property is{" "}
            <span class="shl-inline">@keyframes animationName</span>{" "}
            just like you would write in plain CSS.
          </p>
          {/* Converting animations code block */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-cmnt">
              // This is what we had{`
`}
            </span>
            <span class="shl-kwd">const</span> twindV0Animations{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"fading-keyframes 0.5s"</span>
            <span class="shl-oper">,</span>
            {`
`}&#125;;{`
`}
            <span class="shl-kwd">const</span> twindV0Keyframes{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"fading-keyframes"</span>
            <span class="shl-oper">:</span> &#123;{`
    `}
            <span class="shl-str">"0%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">0</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
    `}
            <span class="shl-str">"100%"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}opacity<span class="shl-oper">:</span> <span class="shl-num">1</span>
            <span class="shl-oper">,</span>
            {`
    `}&#125;<span class="shl-oper">,</span>
            {`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-cmnt">
              // This is what we need now{`
`}
            </span>
            <span class="shl-kwd">const</span> newAndImprovedTwindV1Animation
            {" "}
            <span class="shl-oper">=</span> [{`
  `}
            <span class="shl-str">"fade-in"</span>
            <span class="shl-oper">,</span> &#123;{`
    `}animation<span class="shl-oper">:</span>{" "}
            <span class="shl-str">"fading-keyframes 0.5s"</span>
            <span class="shl-oper">,</span>
            {`
    `}
            <span class="shl-str">"@keyframes fading-keyframes"</span>
            <span class="shl-oper">:</span> &#123;{`
      `}
            <span class="shl-str">"0%"</span>
            <span class="shl-oper">:</span> &#123;{`
        `}opacity<span class="shl-oper">:</span> <span class="shl-num">0</span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;<span class="shl-oper">,</span>
            {`
      `}
            <span class="shl-str">"100%"</span>
            <span class="shl-oper">:</span> &#123;{`
        `}opacity<span class="shl-oper">:</span> <span class="shl-num">1</span>
            <span class="shl-oper">,</span>
            {`
      `}&#125;<span class="shl-oper">,</span>
            {`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}];{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span> [<span class="shl-oper">
              ...
            </span>newAndImprovedTwindV1Animation]<span class="shl-oper">
              ,
            </span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          {/* Converting dynamic classes */}
          <p class="my-2 text-justify">
            Converting dynamic Twind v0 classes to dynamic Twind v1 classes
            isn't a big deal, you only need to change the function parameter
            from a destructured array to a destructured object with the{" "}
            <span class="shl-inline">$$</span> property.
          </p>
          {/* Converting dynamic classes code block */}
          <div class="shl-block">
            <span class="shl-kwd">import</span>{" "}
            &#123; defineConfig<span class="shl-oper">,</span>{" "}
            <span class="shl-class">Preset</span> &#125;{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">"https://esm.sh/@twind/core@1.1.3"</span>;{`
`}
            <span class="shl-kwd">import</span> presetTailwind{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-tailwind@1.1.4"
            </span>;{`
`}
            <span class="shl-kwd">import</span> presetAutoprefix{" "}
            <span class="shl-kwd">from</span>{" "}
            <span class="shl-str">
              "https://esm.sh/@twind/preset-autoprefix@1.0.7"
            </span>;{`

`}
            <span class="shl-cmnt">
              // This is what we had{`
`}
            </span>
            <span class="shl-kwd">const</span> customTwindDynamicClasses{" "}
            <span class="shl-oper">=</span> &#123;{`
  `}
            <span class="shl-str">"custom-font-scale"</span>
            <span class="shl-oper">:</span>{" "}
            ([fontSize]<span class="shl-oper">:</span>{" "}
            <span class="shl-class">Array</span>
            <span class="shl-oper">&lt;</span>string<span class="shl-oper">
              &gt;
            </span>) <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-kwd">switch</span> (fontSize) &#123;{`
      `}
            <span class="shl-kwd">case</span> <span class="shl-str">"big"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.25rem, 2.5dvw, 2.5rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
    `}&#125;{`
  `}&#125;<span class="shl-oper">,</span>
            {`
`}&#125;;{`

`}
            <span class="shl-cmnt">
              // This is what we need now{`
`}
            </span>
            <span class="shl-kwd">const</span>{" "}
            newAndImprovedTwindV1DynamicClasses <span class="shl-oper">=</span>
            {" "}
            [{`
  `}[<span class="shl-str">"custom-font-scale-"</span>
            <span class="shl-oper">,</span> (&#123; $$ &#125;){" "}
            <span class="shl-kwd">=&gt;</span> &#123;{`
    `}
            <span class="shl-kwd">switch</span> ($$) &#123;{`
      `}
            <span class="shl-kwd">case</span> <span class="shl-str">"big"</span>
            <span class="shl-oper">:</span>
            {`
        `}
            <span class="shl-kwd">return</span> &#123;{`
          `}
            <span class="shl-str">"font-size"</span>
            <span class="shl-oper">:</span>{" "}
            <span class="shl-str">"clamp(1.25rem, 2.5dvw, 2.5rem)"</span>
            <span class="shl-oper">,</span>
            {`
        `}&#125;;{`
    `}&#125;{`
  `}&#125;]<span class="shl-oper">,</span>
            {`
`}];{`

`}
            <span class="shl-kwd">export</span>{" "}
            <span class="shl-kwd">default</span> &#123;{`
  `}
            <span class="shl-oper">...</span>
            <span class="shl-func">defineConfig</span>(&#123;{`
    `}presets<span class="shl-oper">:</span>{" "}
            [<span class="shl-func">presetTailwind</span>(){" "}
            <span class="shl-kwd">as</span>{" "}
            <span class="shl-class">Preset</span>
            <span class="shl-oper">,</span>{" "}
            <span class="shl-func">
              presetAutoprefix
            </span>()]<span class="shl-oper">,</span>
            {`
    `}rules<span class="shl-oper">:</span> [<span class="shl-oper">
              ...
            </span>newAndImprovedTwindV1DynamicClasses]<span class="shl-oper">
              ,
            </span>
            {`
  `}&#125;)<span class="shl-oper">,</span>
            {`
  `}selfURL<span class="shl-oper">:</span> <span class="shl-kwd">import</span>
            <span class="shl-oper">.</span>meta<span class="shl-oper">
              .
            </span>url<span class="shl-oper">,</span>
            {`
`}&#125;;
          </div>

          <StyledSubHeader title="Closing Notes" />
          {/* Twind V1 is better */}
          <p class="my-2 text-justify">
            Twind v1 is a lot more powerful than v0, it's fairly easy to extend
            its functionality and add things like preflight requests for fonts
            and much more.
          </p>
          {/* Do more using the docs */}
          <p class="my-2 text-justify">
            Feel free to use the twind.style docs to further extend your
            configuration files. If something in this post doesn't make sense or
            is poorly explained, feel free to
            <GradientLink
              content="open an issue"
              link="https://github.com/TheYuriG/deno-portfolio/issues"
            />{" "}
            on the Github repository for this website or{" "}
            <GradientLink
              link="https://discord.com/invite/deno"
              content="reach out on Discord"
              title="Support server for Deno/Fresh/SaasKit and everything else in between."
              customRel="noopener noreferrer"
            />.
          </p>
          {/* If I know more, it will be here */}
          <p class="my-2 text-justify">
            I'll probably edit this post as time goes on and I further extend my
            Twind configuration files and add here my experience. If you have a
            question about something else not listed here, it's most likely that
            I also don't know the answer, else I would have added here.
          </p>

          {/* Post author */}
          <BlogPostFooter />
        </article>

        {/* Scroll up button */}
        <ScrollToTop />
      </Base>
    </>
  );
}
