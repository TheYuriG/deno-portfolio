//? Manage the current board status
import { useState } from "preact/hooks";
//? Render an individual tile on the board
import { TicTacToeTile } from "../../../components/projects/tictactoe/TicTacToeTile.tsx";
//? Tracker of who won the game or if the game tied
import { TicTacToeGameStatus } from "../../../components/projects/tictactoe/TicTacToeGameStatus.tsx";
//? Render the button to reset the game once it ends with a tie or win
import { StyledButton } from "../../../components/UI/StyledButton.tsx";
//? Import maximum number of tiles in a board
import { MAX_TICTACTOE_TILES } from "../../../data/projects/tictactoe/maxTiles.ts";
//? Import interface for typecasting
import type { BoardTile } from "../../../types/component-properties/projects/tictactoe/BoardTile.ts";
//? Utility function to reset a board array to 0 indices, then
//? populate it with 9 tiles
import { resetBoardFunction } from "../../../services/tictactoe/resetBoardFunction.ts";
//? Calculates if the board met a winning condition
import { shouldGameEnd } from "../../../services/tictactoe/shouldGameEnd.ts";
//? Toggles player turn
import { changePlayers } from "../../../services/tictactoe/changePlayers.ts";

//? Initialize an empty board that gets filled by 'resetBoard()'
const baseBoardMarks: BoardTile[] = [];

//? Render the initial empty board
resetBoardFunction(baseBoardMarks);

//? Tracks how many rounds were played on the current game
let roundsPlayed = 0;

//? Renders the tictacboard, player turn and game status
export default function TicTacToeBoard() {
  //? Tracks board current status
  const [boardMarks, updateBoardMarks] = useState([...baseBoardMarks]);
  //? Tracks who is currently allowed to play, X or O
  const [currentPlayer, toggleCurrentPlayer] = useState<"X" | "O">("X");
  //? Tracks if the game ended in a draw after 9 moves
  const [draw, declareDraw] = useState(false);
  //? Tracks if the players are allowed to make additional moves and
  //? if the game over status should be displayed
  const [gameOver, toggleGameOver] = useState(false);

  //? Update mark function provided to all tiles
  function updateMarkFunction(marked: boolean, position: number) {
    //? If the tile is already marked or if the game is over, do nothing
    if (marked === true || gameOver === true) {
      return;
    }

    //? Progress a round
    roundsPlayed++;
    //? Swap players
    toggleCurrentPlayer(changePlayers);
    //? Mark the current tile
    updateBoardMarks((current) => {
      current[position].marked = true;
      current[position].symbol = currentPlayer;

      if (shouldGameEnd(current)) {
        //? If the game meets a win condition, end it
        toggleGameOver(true);
      } else {
        //? If the game didn't meet a win condition and the last
        //? tile was marked, end the game with a draw
        if (roundsPlayed === MAX_TICTACTOE_TILES) {
          toggleGameOver(true);
          declareDraw(true);
        }
      }
      return current;
    });
  }

  return (
    <>
      {/* Create a 3x3 grid with the tiles */}
      <div class="grid grid-rows-3 grid-cols-3 custom-bo-ac">
        {boardMarks.map(({ position, marked, symbol }) => (
          <TicTacToeTile
            position={position}
            mark={marked}
            played={symbol}
            currentPlayer={currentPlayer}
            gameStatus={gameOver}
            updateMarkFunction={() => updateMarkFunction(marked, position)}
          />
        ))}
      </div>
      {/* Wether the game is still going or it ended */}
      <TicTacToeGameStatus
        gameEnded={gameOver}
        currentPlayer={currentPlayer}
        drawState={draw}
      />
      {/* Restart game button when the game ends */}
      {gameOver && (
        <StyledButton
          text="Play again?"
          classes="mt-2"
          onClickFunction={() => {
            resetBoardFunction(baseBoardMarks);
            updateBoardMarks(baseBoardMarks);
            toggleGameOver(false);
            declareDraw(false);
            toggleCurrentPlayer(changePlayers);
            roundsPlayed = 0;
          }}
        />
      )}
    </>
  );
}
