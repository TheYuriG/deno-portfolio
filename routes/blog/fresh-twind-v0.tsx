//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
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
import { experienceDenoFreshPost as previousPost } from "../../data/blog/experience-deno-fresh.ts";
import { freshTwindV0 as postSummary } from "../../data/blog/fresh-twind-v0.ts";
import { customizingTwindConfig as nextPost } from "../../data/blog/customizing-fresh-twind.ts";
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
          next={{ title: nextPost.title, link: nextPost.link }}
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
            This is a follow-up of a previous post about{" "}
            <DottedLink
              content="my experience with Deno"
              link={previousPost.link}
            />{" "}
            so far, where I mentioned that Twind deserved a whole post, this is
            said post.
          </p>

          {/* Miscommunication */}
          <StyledSubHeader title="Miscommunication" id="miscommunication" />
          <p class="my-2 text-justify">
            One minor thing about Twind on Fresh is that it's not clearly
            labeled as Twind when you start a new project. You get prompted
            about installing Tailwind, not even a version is provided (Twind
            uses the Tailwind v2 classes, not v3). This can trip up people who
            aren't expecting to need to manage the difference in behavior and
            configuration between both.
          </p>
          <p class="my-2 text-justify">
            If you don't customize your config file, you might even not
            initially notice the difference. I don't get why this is the case, I
            would still opt to use it if I was told that I was being suggested a
            JIT Tailwind clone, but it is what it is.
          </p>

          {/* Versioning */}
          <StyledSubHeader title="Versioning" id="versioning" />
          <p class="my-2 text-justify">
            I want to preface this post by stating the obvious: I'm aware that
            v0 packages are unstable, that's why they are versioned this way.
            But I would expect that a stable package (Fresh, in this instance),
            would have somewhat stable internal APIs, so I assumed this would
            just work. It doesn't.
          </p>

          {/* Unexpected Behavior */}
          <StyledSubHeader title="Unexpected Behavior" id="behavior" />
          <p class="my-2 text-justify">
            OK, so the previous two points are pretty minor, but this was a
            major issue when I first started using Twind v0. Tailwind v3 has
            some really major quality-of-life changes that help styling elements
            dynamically, or adding custom properties on the class name. Very
            often, this won't work as you expect in Twind v0. Here are some
            examples:
          </p>

          {/* List of issues */}
          <GreekList
            items={[
              // [custom-properties]
              <p>
                You can't use <span class="shl-inline">color-[red]</span>,{" "}
                <span class="shl-inline">bg-[red]</span> or{" "}
                <span class="shl-inline">border-[red]</span>{" "}
                because that converts to{" "}
                <span class="shl-inline">position</span>{" "}
                attribute instead of coloring the element.{" "}
                <span class="shl-inline">red</span>{" "}
                is being used here as an example, nothing you put in between
                brackets will change the element's color.
              </p>,
              // CSS data types
              <p>
                You can't use{" "}
                <GradientLink
                  content="CSS data types"
                  link="https://tailwindcss.com/docs/adding-custom-styles#resolving-ambiguities"
                />{" "}
                to coerce to the correct attribute either for this issue either.
              </p>,
              // var()
              <p>
                Tailwind doesn't require that you wrap variables with{" "}
                <span class="shl-inline">var()</span>{" "}
                either, but in the rare cases that Twind accepts custom values
                between brackets (like for{" "}
                <span class="shl-inline">fill</span>), it will be required to
                make it work.
              </p>,
              // Twind v0 is Tailwind v2
              <p>
                Because Twind mimicks Tailwind v2, some classes were renamed
                when Tailwind v3 released and won't be applied correctly. Some
                of the classes that will fail to apply as expected, forcing you
                to check the{" "}
                <GradientLink
                  content="Tailwind v2 docs"
                  link="https://v2.tailwindcss.com/docs"
                />{" "}
                to figure out what is old version name (e.g.{" "}
                <span class="shl-inline">grow</span> in Tailwind v3 is{" "}
                <span class="shl-inline">flex-grow</span>{" "}
                in Tailwind v2 and Twind v0,{" "}
                <span class="shl-inline">shrink-0</span> in Tailwind v3 is{" "}
                <span class="shl-inline">flex-shrink-0</span>{" "}
                in Tailwind v2 and Twind v0 and so on).
              </p>,
              // No Tailwind v3 utility classes
              <p>
                Various utility classes of Tailwind v3 aren't available in
                Tailwind v2/Twind v0, e.g. none of the 'backdrop-blur' classes
                are available.
              </p>,
              // Properties applied in the wrong order
              <p>
                Some Twind properties are applied in the wrong order than
                applied in the class list, you have to use as inline styles
                instead for CSS specificity. Changing the order in which the
                classes are applied to the element doesn't matter either, Twind
                will still unproperly apply them to the element. This meant that
                if you wanted to reuse another class, like{" "}
                <span class="shl-inline">btn</span>, you maybe wouldn't be able
                to change its <span class="shl-inline">background-color</span>,
                {" "}
                <span class="shl-inline">border-color</span>{" "}
                because those attribute classes were applied before the{" "}
                <span class="shl-inline">btn</span> class.
              </p>,
            ]}
          />

          {/* What does this mean? */}
          <StyledSubHeader
            title="What does this mean?"
            id="what-does-this-mean"
          />
          {/* Slowing down development */}
          <p class="my-2 text-justify">
            Why do these matter? Because it slows down your development process.
            If you are used to Tailwind v3 like I was when I started working
            with Fresh, this puts breaks consistently in your workflow. You
            can't just blindly hammer away code using Twind like you might be
            used to with Tailwind, you need to check if your individual styling
            for every element worked as you expected it to. When it doesn't, you
            have to inspect the element to see if the proper class was applied
            and, if not, go visit the docs to double check if you used the
            proper class or it has a different name in that version.
          </p>
          <p class="my-2 text-justify">
            It's a lot of additional mental overhead that you have to track when
            the entire purpose of the tool is to improve and speed up your
            development workflow. So why didn't I drop it entirely and went
            ahead to use something else instead?
          </p>
          <p class="my-2 text-justify">
            I actually initially did and wrote my own CSS files and managed my
            own classes without Twind. However this eventually created another
            problem where I was importing a complete CSS file only to use a few
            of its classes, something that Tailwind manages for you
            automatically, by purging unused classes on the build step. I just
            had to make Twind work FOR ME, instead of AGAINST ME.
          </p>

          {/* Solution */}
          <StyledSubHeader title="Solution" id="solution" />
          <p class="my-2 text-justify">
            What I had to do to solve this problem was creating my own custom
            Twind classes in the{" "}
            <span class="shl-inline">twind.config.js</span>. That way I could
            always ensure the correct CSS properties are being applied and used
            with the correct order to not override each other.
          </p>
          <p class="my-2 text-justify">
            If you want to customize your{" "}
            <span class="shl-inline">twind.config.js</span>{" "}
            file, I have a separate blog post about how to do so{" "}
            <DottedLink content="here" link={nextPost.link} /> or by clicking
            {" "}
            <DottedLink content="Next" link="#top" /> on the navigation bar.
          </p>

          {/* A Brighter Future */}
          <StyledSubHeader title="A Brighter Future" id="future" />
          <p class="my-2 text-justify">
            Since the halfway point of 2023, Fresh can now use Twind v1, which
            is stable and actually uses a "port" of Tailwind v3. Switching to it
            essentially solved every issue I was previously having with v0,
            including the classes not being applied in the correct order.
          </p>
          <p class="my-2 text-justify">
            Unfortunately, this is still not the default dependency for starting
            a new project (as of the day of this post) and you are still forced
            to manually migrate your Twind v0 dependency to Twind v1 manually.
            Still, better than nothing, right?
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
