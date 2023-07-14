//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
import { GradientLink } from "../../components/UI/GradientLink.tsx";
import TicTacToeBoard from "../../islands/projects/TicTacToeBoard.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Play Tic Tac Toe"
        description="A basic build of the Tic Tac Toe multiplayer game hosted on tictactoe.deno.dev"
        link="https://www.theyurig.com/projects/tictactoe"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons
          back={{ title: "Return to projects", link: "/projects" }}
        />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Play Tic Tac Toe (offline)" />
          <p class="mb-4 text-justify">
            This is the local/offline version of the multiplayer app I'm
            building for{" "}
            <GradientLink
              content="TicTacToe Online"
              link="https://tictactoe.deno.dev"
              title="Play Tic Tac Toe online against other human players. Create a room and share with your friends."
            />.
          </p>
          <TicTacToeBoard />
        </article>
      </Base>
    </>
  );
}
