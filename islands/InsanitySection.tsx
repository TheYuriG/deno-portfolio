//? Import useState hook to manage the insanityArray
import { useState } from "preact/hooks";
//? Imports the Styled Button template
import { StyledButton } from "../components/UI/StyledButton.tsx";

//? Exports a button that will add more Insanity text when clicked.
//? Also ships with basic Insanity text by default
export default function InsanitySection() {
  //? Simple array to track how many Insanity should be displayed
  const [insanityArray, setInsanity] = useState([] as Array<null>);

  return (
    <>
      <section class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
        {
          /* Button that adds another null to the insanityArray, which
                then renders more Insanity to the page */
        }
        {/* Insanity section. Can be expanded by clicking the button above */}
        <StyledButton
          classes="self-end mb-4"
          text="Dial ⤴️ the Insanity 🤪"
          onClickFunction={() => {
            setInsanity((currentInsanity) => [...currentInsanity, null]);
          }}
        />
        {/* Returns two labels and Radio buttons for Dark and Light themes */}
        {insanityArray.map(() => (
          <>
            <p class="text-justify">
              Insanity is doing the exact... same fucking thing... 🔁 over and
              🔁 over again expecting... shit to change... ⏭️{" "}
              <em>
                That. Is. <strong>Crazy.</strong>
              </em>{" "}
              🤪
            </p>
            <p class="text-justify">
              The first time somebody told me that, I dunno, I thought they were
              bullshitting me, so 💥, I shot him 🔫. The thing is... He was
              right 🤔. And then I started seeing, everywhere I looked 🔎,
              everywhere I looked all these fucking pricks, everywhere I looked,
              doing the exact same fucking thing... 🔁 over and 🔁 over and 🔁
              over and 🔁 over again thinking 'this time is gonna be different'
              no, no, no please... This time is gonna be different, I'm sorry
              🙏, I don't like... The way... you are looking at me... 🧐
            </p>
            <p class="text-justify">
              Okay, Do you have a fucking problem in your head 🤕, do you think
              I am bullshitting you, do you think I am lying 🤥? Fuck you! Okay?
              Fuck you! 😡
            </p>
            <p class="text-justify">
              It's okay, man. I'm gonna chill, hermano. I'm gonna chill 🥶...
              The thing is... Alright, the thing is I killed you once already
              🪦... and it's not like I am fucking crazy 🤪. It's okay... It's
              like water under the bridge 🌉.{" "}
              <strong>
                Did I ever tell you the definition... of insanity?
              </strong>
            </p>
          </>
        ))}
      </section>
    </>
  );
}
