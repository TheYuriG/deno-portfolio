//? Import useState hook to manage the insanityArray
import { useState } from "preact/hooks";
//? Imports the Styled Button template
import StyledButton from "./StyledButton.tsx";

//? Exports a button that will add more Insanity text when clicked.
//? Also ships with basic Insanity text by default
export default function InsanitySection() {
  //? Simple array to track how many Insanity should be displayed
  const [insanityArray, setInsanity] = useState([null]);

  return (
    <>
      <section>
        {
          /* Button that adds another null to the insanityArray, which
                then renders more Insanity to the page */
        }
        {/* Insanity section. Can be expanded by clicking the button above */}
        <StyledButton
          text="Dial ⤴️ the Insanity 🤪"
          style="align-self: end; margin-bottom: 0.5rem;"
          onClickFunction={() => {
            setInsanity((currentInsanity) => [...currentInsanity, null]);
          }}
        />
        {/* Returns two labels and Radio buttons for Dark and Light themes */}
        {insanityArray.map(() => (
          <>
            <p>
              Insanity is doing the exact... same fucking thing... 🔁 over and
              🔁 over again expecting... shit to change... ⏭️{" "}
              <em>
                That. Is. <strong>Crazy.</strong>
              </em>{" "}
              🤪
            </p>
            <p>
              The first time somebody told me that, I dunno, I thought they were
              bullshitting me, so 💥, I shot him 🔫. The thing is... He was
              right 🤔. And then I started seeing, everywhere I looked 🔎,
              everywhere I looked all these fucking pricks, everywhere I looked,
              doing the exact same fucking thing... 🔁 over and 🔁 over and 🔁
              over and 🔁 over again thinking 'this time is gonna be different'
              no, no, no please... This time is gonna be different, I'm sorry
              🙏, I don't like... The way... you are looking at me... 🧐
            </p>
            <p>
              Okay, Do you have a fucking problem in your head 🤕, do you think
              I am bullshitting you, do you think I am lying 🤥? Fuck you! Okay?
              Fuck you! 😡
            </p>
            <p>
              It's okay, man. I'm gonna chill, hermano. I'm gonna chill 🥶...
              The thing is... Alright, the thing is I killed you once already
              🪦... and it's not like I am fucking crazy 🤪. It's okay... It's
              like water under the bridge 🌉. Did I ever tell you the
              definition... of insanity?
            </p>
          </>
        ))}
      </section>
    </>
  );
}
