import { StyledHeader } from "../../UI/StyledHeader.tsx";
import { StyledSubHeader } from "../../UI/StyledSubHeader.tsx";

export function TicTacToeGameStatus(
  { gameEnded, currentPlayer, drawState }: {
    gameEnded: boolean;
    currentPlayer: "X" | "O";
    drawState: boolean;
  },
) {
  if (!gameEnded) {
    return (
      <StyledSubHeader
        title={`Player ${currentPlayer}'s turn`}
      />
    );
  }

  return (
    <StyledHeader
      title={drawState === true
        ? "Game over! Draw!"
        : `Player ${currentPlayer === "X" ? "O" : "X"} won!`}
    />
  );
}
