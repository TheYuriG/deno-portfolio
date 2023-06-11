//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Import CustomHead with appropriate metadata
import { CustomHead } from "../components/base/CustomHead.tsx";
import { GradientLink } from "../components/base/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title='What is "this"?'
        description="Tech stack used to create this website."
        link="https://www.theyurig.com/this"
      >
        <link rel="stylesheet" href="/this.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="thick-ac-underline hover:tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            What is this?
          </h1>
          <p class="text-justify">
            <span class="inline-code">this</span>{" "}
            is a very common word in the world of Javascript if you are used to
            Object-Oriented Programming or old-school front-end development. In
            the first case, it refers to the Instance of a class that is
            currently being used. The second, it's about the{" "}
            <span class="inline-code">window</span> or{" "}
            <span class="inline-code">document</span> objects.
          </p>
          <p class="text-justify">
            In the current context, <span class="inline-code">this</span>{" "}
            refers to this website and this page will be used to talk about the
            tech stack used to create it. This is quite a bit technical and if
            you are not a developer, it's okay if it goes over your head.
          </p>
          <h1 class="thick-ac-underline hover:tx-ac f-as my-4 text-4xl text-center">
            Ok, so what is this?
          </h1>
          <p class="text-justify">
            This website is meant to be an outlet for my{" "}
            <GradientLink
              content="thoughts"
              link="/blog"
              newTab={true}
            />{" "}
            and{" "}
            <GradientLink
              content="creative expression"
              link="/toys"
              newTab={true}
            />
            . It was built using Deno, Fresh, Preact and Typescript.
          </p>
          <img
            class="h-40 w-40 m-4"
            src="https://deno-pt.vercel.app/images/deno_logo_4.gif"
            alt="Deno in the rain (pixelated)"
            title="Deno artwork by tanakaworld"
          />
          <p class="text-justify">
            Deno is a secure Javascript/Typescript runtime, forcing developers
            to opt-in when using any potentially harmful behavior (like making
            network connections or reading/writing to the disk). The reason I
            chose to use Deno, however, is for enabling me able to write
            Typescript code without needing to transpile it back to Javascript
            before deployment. For reference,{" "}
            <GradientLink
              content="Bun"
              link="https://bun.sh/"
              newTab={true}
              customRel="noopener noreferrer"
            />{" "}
            also allows developers to run Typescript natively since that also
            has built-in support for Typescript right out-of-the-box.
          </p>
          <img
            class="h-40 w-40 m-4"
            src="https://fresh.deno.dev/logo.svg?__frsh_c=414f858427046bd41a702d524fadc4215ab7180f"
            alt="Fresh logo"
            title="Fresh, the default no-build, Typescript supported Full-Stack framework"
          />
          <p class="text-justify">
            Fresh is the default Full-Stack framework for building Web Apps with
            Deno. It uses File System Routing, no builds (really, none!),
            out-of-the-box Typescript support (are you seeing a pattern here?),
            zero-configuration, and ships static HTML pages to the client with 0
            JS unless you explicitly want to ship it using the{" "}
            <GradientLink
              content="Islands"
              link="https://www.patterns.dev/posts/islands-architecture"
              newTab={true}
              customRel="noopener noreferrer"
            />{" "}
            architecture.
          </p>
          <img
            class="h-40 w-40 m-4"
            src="https://preactjs.com/assets/branding/symbol.png"
            alt="Preact logo"
            title="Preact, the lightweight, drop-in alternative for React"
          />
          <p class="text-justify">
            Preact is the UI library of choice for Fresh since it can be
            JIT-compiled with 0 build-time. It's also Typescript compatible
            (another one!) and can do nearly anything that normal React could.
          </p>
          <img
            class="h-40 w-40 m-4"
            src="https://twind.dev/assets/twind-logo-animated.svg"
            alt="Twind logo"
            title="Twind, fastest tailwind-in-js solution in existence"
          />
          <p class="text-justify">
            Twind is a tailwind-in-js solution, it does everything that Tailwind
            can do, using the same syntax. It also requires no
            building/bundling, hence why it's the tech of choice for Fresh apps.
            It also serves as a drop-in replacement for its original library,
            just like Preact+React. While it does help me with the initial
            styling, I still end up writing CSS classes instead of relying on
            Twind and spamming inline styles.
          </p>
        </article>
      </Base>
    </>
  );
}
