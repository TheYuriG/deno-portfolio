//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../../components/blog/BlogNavigationButtons.tsx";
//? Describe things that were learned with this current project
import Collapsible from "../../islands/Collapsible.tsx";
import RetirementCalculator from "../../islands/RetirementCalculator.tsx";

//? Renders the food-order page, with a list of items and a cart
export default function Home() {
  return (
    <>
      {
        /* Base Head with all common required imports, plus added
        meta-tags and imports required for this specific route */
      }
      <CustomHead
        title="Retirement Calculator"
        description="Calculate how much you need to save monthly, and for how many months, to build permanent retirement funds, regardless of how many years you live after stop working."
        link="https://www.theyurig.com/projects/retirement-calculator"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to projects overview", link: "/projects" }}
        />
        <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Insights */}
          <Collapsible
            checkboxText="What did I learn?"
            innerText={[
              "This project actually didn't exist when I started the course and was added halfway through. I've always like dealing with finances and I've been investing since I've started working. I've used calculator.net (https://www.calculator.net/retirement-calculator.html) as a base example on how to calculate retirement funds.",
              "I really didn't like the way they calculate your funds to only last as long as you live, so I've spun up my own version that calculates how much you would need to save in order to retire if you were able to live forever.",
              "Inflation wasn't considered, neither was yearly income increase. This tool (which I've built mostly for myself, really) assumes that you understand both of those concepts and that you would offset both yourself. You need to be getting paid more to offset inflation and therefore, you need to invest more to still be able to FIRE retire.",
              "While I find retirement an interesting concept, I don't actually see myself truly retiring. I just don't see myself as someone that could spend months being idle, playing online games on my phone or having some other sort of low stakes hobby. I'm either gonna spend the rest of my like travelling the world or I'll start another business, then another, then another.",
            ]}
          />
          {/* Retirement calculator */}
          <StyledHeader title="Retirement calculator" />
          {/* Form and results */}
          <RetirementCalculator />
        </section>
      </Base>
    </>
  );
}
