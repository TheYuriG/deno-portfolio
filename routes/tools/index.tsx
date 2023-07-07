//? Import CustomHead with appropriate metadata
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";
//? Create a greek list of contents
import { GreekList } from "../../components/UI/GreekList.tsx";

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
          <GreekList
            items={[
              //? Syntax highlighter
              <GradientLink
                content="Syntax Highlight"
                title="Create a HTML+CSS version of syntax highlight that you can paste into your React/Preact files."
                link="/tools/syntax-highlight"
                newTab={false}
              />,
              //? Retirement calculator
              <GradientLink
                content="Retirement Calculator"
                title="I love planning how to save/invest money and I love watching interest compound, so I've built a tool that helps me visualise that over time."
                link="/tools/retirement-calculator"
                newTab={false}
              />,
              //? Whatsapp messaging Link Generator
              <GradientLink
                content="Whatsapp Message Link Generator"
                title="When I used to work with marketing, I could not find a good resouce to generate a link to message someone in WhatsApp. This tool does what I needed done back then. This tool helps manual messaging, but if this is something you are doing constantly, I suggest automating this process in another way instead or hiring someone to create a chatbot for you."
                link="/tools/whatsapp-message-link-generator"
                newTab={false}
              />,
              //? Mathematical expression visualizer
              <GradientLink
                content="Expression Visualizer"
                title="This is something that the teacher of the Automating the Boring Stuff used at some point in his classes. Thought it was really interesting, so I'm spinning up my own version of it for anyone to use."
                link="/tools/expression-visualizer"
                newTab={false}
              />,
            ]}
          />
        </article>
      </Base>
    </>
  );
}
