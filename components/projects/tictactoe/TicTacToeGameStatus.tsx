//? Display a header if the game ended, regardless of the result
import { StyledHeader } from "../../UI/StyledHeader.tsx";
//? Display a subheader that displays the current
//? player's turn, if the game is still ongoing
import { StyledSubHeader } from "../../UI/StyledSubHeader.tsx";

//? Required properties for this component
interface TicTacToeGameStatusProperties {
  gameEnded: boolean;
  currentPlayer: "X" | "O";
  drawState: boolean;
}

//? Render an informational header with the current game status:
//! game over (winner/draw), otherwise current player's turn
export function TicTacToeGameStatus(
  { gameEnded, currentPlayer, drawState }: TicTacToeGameStatusProperties,
) {
  //? If the game is still ongoing, display who's the current player
  if (gameEnded === false) {
    return (
      <StyledSubHeader
        title={`Player ${currentPlayer}'s turn`}
      />
    );
  }

  //? If the game ended, display the the result
  return (
    <StyledHeader
      title={drawState === true
        ? "Game over! Draw!"
        : `Player ${currentPlayer === "X" ? "O" : "X"} won!`}
    />
  );
}
