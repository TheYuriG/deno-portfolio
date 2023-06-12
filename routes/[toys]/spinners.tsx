//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Import CustomHead with appropriate metadata
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/base/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Spinners"
        description="Playing with CSS translate3d!"
        link="https://www.theyurig.com/toys/spinners"
      >
        <link rel="stylesheet" href="/spinners.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons
          back={{ title: "Return to all toys", link: "/toys" }}
        />
        <article class="flex flex-col w-full h-full max-w-4xl mx-auto items-center">
          <h1 class="custom-underline-thick hover:custom-tx-ac f-as my-4 text-2xl lg:text-4xl text-center">
            Spinners
          </h1>
          <p class="mx-auto">
            Experimenting with translate3d (hover for information!)
          </p>
          <div class="mb-20 mt-24" id="cubes-container">
            {/* Text Cube */}
            <div
              id="named-cube"
              class="cube"
              style="width: 4em; height: 8em;"
              title="green+C=close; red+F=far; T=top; B=bottom; L=left; R=right"
            >
              <div style="transform: translate3d(-1em, 0em, 2em)">
                <div class="anti-spinner close">TL</div>
              </div>
              <div style="transform: translate3d(3em, 0em, 2em)">
                <div class="anti-spinner close">TR</div>
              </div>
              <div style="transform: translate3d(-1em, 4em, 2em)">
                <div class="anti-spinner close">BL</div>
              </div>
              <div style="transform: translate3d(3em, 4em, 2em)">
                <div class="anti-spinner close">BR</div>
              </div>
              <div style="transform: translate3d(-1em, 0em, -2em)">
                <div class="anti-spinner far">TL</div>
              </div>
              <div style="transform: translate3d(3em, 0em, -2em)">
                <div class="anti-spinner far">TR</div>
              </div>
              <div style="transform: translate3d(-1em, 4em, -2em)">
                <div class="anti-spinner far">BL</div>
              </div>
              <div style="transform: translate3d(3em, 4em, -2em)">
                <div class="anti-spinner far">BR</div>
              </div>
            </div>
            {/* Flower Cube */}
            <div
              id="flower-cube"
              class="cube"
              style="width: 4em; height: 8em;"
              title="🌸=close+top; 🌻=close+bottom; 🌺=far+top; 🌹=far+bottom;"
            >
              <div style="transform: translate3d(0em, 1.3em, 2em)">
                <div class="anti-turner">🌸</div>
              </div>
              <div style="transform: translate3d(4em, 1.3em, 2em)">
                <div class="anti-turner">🌸</div>
              </div>
              <div style="transform: translate3d(0em, 5.3em, 2em)">
                <div class="anti-turner">🌻</div>
              </div>
              <div style="transform: translate3d(4em, 5.3em, 2em)">
                <div class="anti-turner">🌻</div>
              </div>
              <div style="transform: translate3d(0em, 1.3em, -2em)">
                <div class="anti-turner">🌺</div>
              </div>
              <div style="transform: translate3d(4em, 1.3em, -2em)">
                <div class="anti-turner">🌺</div>
              </div>
              <div style="transform: translate3d(0em, 5.3em, -2em)">
                <div class="anti-turner">🌹</div>
              </div>
              <div style="transform: translate3d(4em, 5.3em, -2em)">
                <div class="anti-turner">🌹</div>
              </div>
            </div>
            {/* Party Cube */}
            <div
              id="party-cube"
              class="cube"
              style="width: 4em; height: 8em;"
              title="🥳=top; 🎈=bottom;"
            >
              <div style="transform: translate3d(-0.5em, 1.5em, 2em)">
                <div class="anti-flipper">🥳</div>
              </div>
              <div style="transform: translate3d(3.5em, 1.5em, 2em)">
                <div class="anti-flipper">🥳</div>
              </div>
              <div style="transform: translate3d(-0.5em, 5.5em, 2em)">
                <div class="anti-flipper">🎈</div>
              </div>
              <div style="transform: translate3d(3.5em, 5.5em, 2em)">
                <div class="anti-flipper">🎈</div>
              </div>
              <div style="transform: translate3d(-0.5em, 1.5em, -2em)">
                <div class="anti-flipper">🥳</div>
              </div>
              <div style="transform: translate3d(3.5em, 1.5em, -2em)">
                <div class="anti-flipper">🥳</div>
              </div>
              <div style="transform: translate3d(-0.5em, 5.5em, -2em)">
                <div class="anti-flipper">🎈</div>
              </div>
              <div style="transform: translate3d(3.5em, 5.5em, -2em)">
                <div class="anti-flipper">🎈</div>
              </div>
            </div>
          </div>
          <footer class="self-end">
            this experimentation helped me learn{" "}
            <GradientLink
              link="https://codepen.io/TheYuriG/pen/yLRQqmr?editors=1100"
              title="The order of your transforms are important!"
              content="this"
              customRel="noopener noreferrer"
            />
            . inspiration{" "}
            <GradientLink
              link="https://x.st/spinning-diagrams-with-css/"
              title="Thank you, Harold Cooper, for your very detailed blog post about 'translate3d'!"
              content="here"
              customRel="noopener noreferrer"
            />.
          </footer>
        </article>
      </Base>
    </>
  );
}
