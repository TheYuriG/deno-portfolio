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
import { experienceDenoFreshPost as postSummary } from "../../data/blog/experience-deno-fresh.ts";

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
          back={{ title: "Browse more blog posts", link: "/blog" }}
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
            First of all, I want to preface this blog post by saying that I{" "}
            <strong>
              LOVE
            </strong>{" "}
            the developer experience of working with Deno and I have no
            intention to going back to Node. While the{" "}
            <DottedLink
              link="#good-parts"
              content="good parts"
              title="Scroll page to the good parts"
            />{" "}
            section might be smaller than the{" "}
            <DottedLink
              link="#bad-parts"
              content="bad parts"
              title="Scroll page to the bad parts"
            />{" "}
            section, I'm 100% aware that there are only{" "}
            <GradientLink
              link="https://www.stroustrup.com/quotes.html#:~:text=%22There%20are%20only%20two%20kinds,and%20the%20ones%20nobody%20uses%22"
              content="two types of languages"
              title="Quote by Bjarne Stroustrup"
              customRel="noopener noreferrer"
              newTab={true}
            />.
          </p>

          {/* The Good */}
          <StyledSubHeader title="The good parts" id="good-parts" />
          <p class="my-2 text-justify">
            You might read this post and think that I hate Deno, but it's
            actually quite the opposite, I <strong>LOVE</strong>{" "}
            using Deno and I have no intention of going back to Node for any of
            my side projects. These are the best parts of using Deno daily:
          </p>
          <GreekList
            items={[
              "Built-in linter",
              "Built-in formatter",
              "Built-in testing suite",
              "No typescript configuration needed",
              "No build step",
              "How all of the above helps me focusing on writing code",
              "How all of the above makes different code bases have a similar development workflow",
              "Deploys/Previews/Hosting on Deno Deploy",
              "Very supportive community",
            ]}
          />
          <p class="my-2 text-justify">
            The ability to write typescript with zero configuration, the
            internal tooling (linting, formatting, etc), Deno Deploy providing
            such an amazing experience all around, projects/packages/modules all
            using the same configuration... there is just so much to love here.
          </p>
          <p class="my-2 text-justify">
            There is nothing like being able to contribute to different projects
            and not needing to setup your IDE, not needing to learn another test
            runner. You just clone the repo, run the command to run on{" "}
            <span class="shl-inline">
              --watch
            </span>{" "}
            mode and you are good to go.
          </p>
          <p class="my-2 text-justify">
            The community support is unmatched. I never had a question that went
            unanswered. The community is very welcoming to new members.
            Community support is especially important because we all gather on
            the same single Discord server, unlike Node where developers are
            spread out everywhere. That being said...
          </p>

          {/* The Bad */}
          <StyledSubHeader title="The bad parts" id="bad-parts" />
          <p class="my-2 text-justify">
            I've had a ton of issues when I started out building this website
            and I would like to go over them now to better align people
            expectations on what they should expect if they also want to dip
            into using Deno on a weekly basis:
          </p>
          {/* Painpoints */}
          <GreekList
            items={[
              "Third party packages are abandoned/outdated",
              "Few community resources to start projects",
              "No easy syntax highlighting on demand",
              "Twind v0 in Fresh",
            ]}
          />

          {/* Deno modules */}
          <StyledSubHeader title="Abandoned packages" />
          {/* People have it worse than you */}
          <p class="my-2 text-justify">
            I'll say it before you feel like you have to: this is not a problem
            exclusive to Deno. Neither to Javascript/Typescript. Trust me, I've
            been there before with Dart/Flutter as well, but it doesn't matter
            that this{" "}
            <GradientLink
              link="https://www.nostigmas.org/ally-blog/other-people-have-it-worse-than-you"
              content="happens in other languages"
              title="It's not a race to the bottom"
              customRel="noopener noreferrer"
              newTab={true}
            />/runtimes, it sucks when it happens and it does happen a lot here.
          </p>
          {/* Why do these packages get abandoned? */}
          <p class="my-2 text-justify">
            The reason why I think that this is especially painful in Deno is
            because (and this is just me assuming with 0 evidence to back up
            this claim) that a lot of experienced developers jumped on the Deno
            hypetrain when it came out, assuming there would be a lot of room to
            foster business opportunities and create a supporting package for
            the new runtime that could eventually become backed by large
            companies. I mean, why wouldn't they, it was literally created by
            {" "}
            <GradientLink
              link="https://github.com/ry"
              content="Ryan Dahl"
              title="Original creator of Node.JS"
              customRel="noopener noreferrer"
              newTab={true}
            />, the original creator of Node. If someone out there understands
            about writing Javascript runtimes, it is the guy who made
            three<sup class="hover:custom-tx-ac custom-tr-tx underline">
              <a href="#first-note">
                1
              </a>
            </sup>{" "}
            of them.
          </p>
          {/* NPM support */}
          <p class="my-2 text-justify">
            Another thing that made a lot of developers abandon their Deno
            modules was the fact that
            <GradientLink
              link="https://deno.com/blog/v1.28"
              content="NPM packages are now supported"
              title="Support to NPM packages was added in Deno 1.28, released in November, 2022."
            />{" "}
            in Deno by using the <span class="shl-inline">npm:</span>{" "}
            specifier. Why would you create something like a driver for MongoDB
            if NPM support allows you to simply use{" "}
            <GradientLink
              link="https://deno.land/manual@v1.35.0/node/how_to_with_npm/mongoose"
              content="Mongoose"
              title="Deno's tutorial on how to integrate Mongoose with your project."
            />, which has a proven production track record and is maintained
            full time? It just doesn't make sense to do it, the potential return
            on investment just isn't there.
          </p>

          {/* They are good packages, I swear */}
          <p class="my-2 text-justify">
            The issue here is that these experienced developers made packages
            are good enough to use (because they obviously know what they are
            doing), but still have a plethora of bugs that aren't being fixed
            since those packages did not evolve with the runtime, so you have to
            decide between:
          </p>
          <GreekList
            items={[
              "Forking and maintaining your own personal version",
              "Creating a new package to supersede this package",
            ]}
          />
          {/* Maintaining OSS for free can be an ungrateful task */}
          <p class="my-2 text-justify">
            Don't get me wrong, I'm not here to point fingers or imply that
            these people are awful human beings. No one is forced to maintain
            OSS for free, but it does add a lot of technical overhead when you
            want to start a project and realize that you don't have those
            foundational building blocks readily available for you to use and
            jumpstart your creation, allowing you to focus on the core business
            logic of your project.
          </p>
          {/* How would I fix this? */}
          <p class="my-2 text-justify">
            If I had to suggest how to fix this (and once again, I'm no expert
            in this field), I would suggest that the Deno team opened a
            submission form that allowed developers to request sponsorship to
            develop Deno-related packages. It doesn't need to be a ton of money,
            but $50 to $500 monthly (depending on package size/adoption) would
            do wonders to improve community support.
          </p>

          {/* No community resources */}
          <StyledSubHeader title="Lacking community resources" />
          {/* Node has plenty of tutorials */}
          <p class="my-2 text-justify">
            Being able to find tutorials to build basically anything is not
            something the average Node developer struggles with. Being 15 years
            old means that the ecosystem around it has matured enough that
            people have done dozens of tutorials on about basically everything
            at this point. This, however, is not the case for Deno. When trying
            to search for a resource with Deno, you will often find articles
            about Deno itself and not its modules. While I'm doing my part and
            also writing about it and making modules to be used in Deno, I'm
            only one man.
          </p>
          {/* Community members creating Deno content */}
          <p class="my-2 text-justify">
            I feel like this block wouldn't make justice to the Deno community
            if it didn't also mention some very notable contributions like{" "}
            <GradientLink
              link="https://deno-blog.com"
              content="Craig's Deno Diary"
              title="Craig has been the most consistent Deno-exclusive content creator I've met."
              customRel="noopener noreferrer"
            />,{" "}
            <GradientLink
              link="https://examples.deno.land/"
              content="Deno by Example"
              title="An amazing page where you are taught how to use Deno by seeing how other people would use it."
              customRel="noopener noreferrer"
            />{" "}
            and{" "}
            <GradientLink
              link="https://jollytoad.deno.dev/"
              content="Jollytoad"
              title="Mark Gibson experiments and documents his experiences with various network-related things he tries."
              customRel="noopener noreferrer"
            />. I'm sure there are{" "}
            <GradientLink
              link="https://www.youtube.com/watch?v=lKie-vgUGdI"
              content="more people"
              title="DOZENS!"
              customRel="noopener noreferrer"
            />{" "}
            out there contributing to creating resources, I just didn't meet
            them yet.{" "}
            <GradientLink
              link="https://github.com/kwhinnery"
              content="Kevin Whinnery"
              title="Head of Developer Relations for the Deno team"
              customRel="noopener noreferrer"
            />{" "}
            has also been making livestreams on the{" "}
            <GradientLink
              link="https://discord.com/invite/deno"
              content="Deno Discord Server"
              title="Support server for Deno/Fresh/SaasKit and everything else in between."
              customRel="noopener noreferrer"
            />{" "}
            every ~2 weeks and building stuff with Deno with the community and
            that's a very nice experience. You don't get to have a very
            experienced developer sharing their line of thought on how to build
            a product every day, it's a very enlightening experience.
          </p>
          {/* Possible changes coming */}
          <p class="my-2 text-justify">
            I have recently had a conversation on Discord about the difficulty
            to find resources on Deno and the moderation joined the
            conversation. I ended up suggesting that we could maybe have a
            #resources channel to share blog posts and articles around Deno, so
            let's see how that's gonna develop over the coming weeks. Maybe
            having a centralized location to gather all resources on how to
            build software with Deno helps alleviating the difficulty of finding
            that content through Google.
          </p>

          <StyledSubHeader title="Syntax Highlight" />
          {/* I've made a tool for this */}
          <p class="my-2 text-justify">
            If you have already visited my{" "}
            <DottedLink
              link="/tools"
              content="tools"
              title="My creations"
            />{" "}
            page, you might be wondering why I've created that. Well, this is
            the reason: There is no easy way to easily create highlighted JSX
            for Preact/React components. Deno offers some form of conversion
            from <span class="shl-inline">.md</span> files to{" "}
            <span class="shl-inline">HTML</span>, but that's not exactly helpful
            for this Fresh-based website. Not only I didn't need the HTML files,
            but I also needed that only a portion of the content was
            highlighted, not the whole thing.
          </p>
          {/* What my first attempt ended up as */}
          <p class="my-2 text-justify">
            I eventually gave up and resorted to using a syntax highlighting JS
            package that updates the page content after load, but that deviates
            from the intend of Fresh to ship as little Javascript to the client
            as possible, none at all if it can help it. The problem with this
            approach is that it caused Cumulative Layout Shift and a jarring
            experience whenever the script took considerable time to be fetched.
            Since the script requires the DOM to be loaded and ready, I had to
            defer the script so that it could manipulate the DOM. While this did
            work, it wasn't ideal.
          </p>
          {/* What I tried next */}
          <p class="my-2 text-justify">
            I eventually pivoted from this approach and tried to find a way to
            render <span class="shl-inline">.md</span>{" "}
            files programatically as JSX blocks and syntax highlighted them
            individually. Later I realized that this would also not be ideal,
            not only because I would be adding (or creating!) another dependency
            to my website, but it was also unnecessary overhead to parse those
            files and highlight them again and again on every render. Wouldn't
            be better if I could just convert a code block directly as JSX and
            use that on my code instead?
          </p>
          {/* So I've created Syntax Highlighter */}
          <p class="my-2 text-justify">
            So that's why Ive created{" "}
            <DottedLink
              link="/tools/syntax-highlight"
              content="Syntax Highlight"
              title="The solution to my problem"
            />{" "}
            and how I solved the problem, by creating a tool that creates the
            JSX for me that I can just copy and paste in my files. If it wasn't
            for the fact that I chose to add a theme switcher to this website,
            this page would be one of the many that ship 0 Javascript since I
            got rid of that requirement.
          </p>

          <StyledSubHeader title="Twind (v0) in Fresh" />
          {/* Twind v0 caused me great pain */}
          <p class="my-2 text-justify">
            Ok, so the choice to use Twind v0 slowed down significantly my
            development of this website. I have a lot to say on this topic, so
            it's probably better that I write an entire piece about it alone
            instead of shoving it here, which would honestly be as rich in words
            as this very post.
          </p>
          {/* A preview of my Twind blog post */}
          <p class="my-2 text-justify">
            For now, I'm only gonna mention that the Fresh, until this day (July
            7th, 2023), uses an implementation of Twind v0, which is based on
            Tailwind v2 (superseded by v3 in December of 2021). If you are used
            to Tailwind v3 (which I had nearly 1 year of experience when I
            started this website), a lot of things don't exist in this version
            and a lot others are completely mismatched and will make you
            question how much you really know of Tailwind.
          </p>

          <StyledSubHeader title="Conclusion" />
          {/* I really love using Deno */}
          <p class="my-2 text-justify">
            I want to iterate one more time that I <strong>LOVE</strong>{" "}
            working with Deno. The experience is unmatched and I'm in the
            process of porting all of my current projects to it and use it for
            all the future ones.
          </p>
          {/* I swear */}
          <p class="my-2 text-justify">
            That might not make sense because this blog post is quite long and
            it mostly talks about the things I dislike, but I promise that it is
            still a net positive for my workflow. While annoying, none of those
            things mentioned managed to strangle how enjoyable it is to work
            with Deno.
          </p>
          {/* Rome wasn't built in a day, neither were Deno or Node */}
          <p class="my-2 text-justify">
            Deno wasn't built in a day (in fact, it has recently turned 5 years
            old) and the Deno team is very hard-working. I wasn't there for the
            first 5 years of Node either, but I'm sure it faced from a myriad of
            issues as well, probably even more than Deno did because the team
            running Deno now is more experienced than the team that started Node
            15 years ago. I don't know exactly where Deno is going to be in the
            next 5 years, but I'm buckled up and ready for the ride. Onto the
            10th birthday! 🚀
          </p>

          {/* Notes about Twind */}
          {/* - Twind doesn't work like Tailwind. You can't apply color-[red]/bg-[red]/border-[red] because that converts to attribute-position instead of attribute-color, which is useless. 'text-[]' turns into 'font-size'????. You can't use CSS data types (https://tailwindcss.com/docs/adding-custom-styles#resolving-ambiguities) to coerce to the correct attribute either */}
          {/* - Tailwind doesn't require wrapping variables with 'var()', but twind does, when it rarely works like 'fill'. */}
          {/* - Twind fails to apply some classes (example: shrink-0 doesn't apply flex-shrink: 0), also forcing to use inline styles to compensate or figuring out randomly what is the twind equivalent (grow in Tailwind is flex-grow in Twind, shrink-0 in Tailwind is flex-shrink-0 in Twind). None of the 'backdrop-blur' classes work either. Why??? */}
          {/* - Some Twind properties are applied in the wrong order than applied in the class list, you have to use as inline styles instead for CSS specificity */}
          {/* - Some Twind classes are not matching the Tailwind counterparts ('grow' on tailwind is 'flex-grow' on twind) */}
          {/* Foot notes */}
          <p id="first-note" class="my-2 text-xs text-justify self-start">
            1{" "}
            <GradientLink
              link="https://deno.com/deploy"
              content="Deno Deploy"
              title="A runtime to deploy web applications at scale, on the edge."
              customRel="noopener noreferrer"
              newTab={true}
            />{" "}
            is the third runtime, if you are wondering.
          </p>

          {/* Post author */}
          <BlogPostFooter />
        </article>
      </Base>
    </>
  );
}
