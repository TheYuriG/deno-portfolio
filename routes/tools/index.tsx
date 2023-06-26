//? Import CustomHead with appropriate metadata
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
import { GradientLink } from "../../components/UI/GradientLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Tools"
        description="Things I've built after not being able to find it from someone else."
        link="https://www.theyurig.com/tools"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Tools" />
          {/* Dropdown with explanation about what is this page */}
          <p class="mb-4">
            I needed some things, tried to find them online but couldn't find
            one that exactly fit my needs, so I've built those things myself.
          </p>
          {/* Row of tools */}
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            {/* Syntax highlighter */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              <GradientLink
                content="Syntax Highlight"
                title="Create a HTML+CSS version of syntax highlight that you can paste into your React/Preact files."
                link="/tools/syntax-highlight"
                newTab={false}
              />
            </li>
            {/* Retirement calculator */}
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              <GradientLink
                content="Retirement Calculator"
                title="I love planning how to save/invest money and I love watching interest compound, so I've built a tool that helps me visualise that over time."
                link="/tools/retirement-calculator"
                newTab={false}
              />
            </li>
          </ol>
        </article>
      </Base>
    </>
  );
}
