import { useState } from "preact/hooks";
import { TicTacToeTile } from "../../components/projects/tictactoe/TicTacToeTile.tsx";
import { TicTacToeGameStatus } from "../../components/projects/tictactoe/TicTacToeGameStatus.tsx";
import { StyledButton } from "../../components/UI/StyledButton.tsx";

interface boardTile {
  marked: boolean;
  symbol: string;
  position: number;
}

const baseBoardMarks: boardTile[] = [];
function resetBoard(board: boardTile[]) {
  board.length = 0;
  for (let index = 0; index < 9; index++) {
    board.push(
      { marked: false, symbol: "", position: index },
    );
  }
}
resetBoard(baseBoardMarks);

function shouldGameEnd(boardMarks: typeof baseBoardMarks) {
  //? Pull positions with identifiable names
  const [
    topLeft,
    topMid,
    topRight,
    centerLeft,
    centerMid,
    centerRight,
    bottomLeft,
    bottomMid,
    bottomRight,
  ] = boardMarks;
  //? Wins on all top is same symbol
  if (
    topLeft.symbol === topMid.symbol && topMid.symbol === topRight.symbol &&
    topRight.marked === true
  ) {
    return true;
  }
  //? Wins on all center is same symbol
  if (
    centerLeft.symbol === centerMid.symbol &&
    centerMid.symbol === centerRight.symbol &&
    centerRight.marked === true
  ) {
    return true;
  }
  //? Wins on all bottom is same symbol
  if (
    bottomLeft.symbol === bottomMid.symbol &&
    bottomMid.symbol === bottomRight.symbol &&
    bottomRight.marked === true
  ) {
    return true;
  }
  //? Wins on all right is same symbol
  if (
    topRight.symbol === centerRight.symbol &&
    centerRight.symbol === bottomRight.symbol &&
    bottomRight.marked === true
  ) {
    return true;
  }
  //? Wins on all mid is same symbol
  if (
    topMid.symbol === centerMid.symbol &&
    centerMid.symbol === bottomMid.symbol &&
    bottomMid.marked === true
  ) {
    return true;
  }
  //? Wins on all left is same symbol
  if (
    topLeft.symbol === centerLeft.symbol &&
    centerLeft.symbol === bottomLeft.symbol &&
    bottomLeft.marked === true
  ) {
    return true;
  }
  //? Wins on all top left + center mid + bottom right is same symbol
  if (
    topLeft.symbol === centerMid.symbol &&
    centerMid.symbol === bottomRight.symbol &&
    bottomRight.marked === true
  ) {
    return true;
  }
  //? Wins on all top right + center mid + bottom left is same symbol
  if (
    topRight.symbol === centerMid.symbol &&
    centerMid.symbol === bottomLeft.symbol &&
    bottomLeft.marked === true
  ) {
    return true;
  }
  return false;
}

//? Tracks how many rounds were played on the current game
let roundsPlayed = 0;
export default function TicTacToeBoard() {
  const [boardMarks, updateBoardMarks] = useState([...baseBoardMarks]);
  const [currentPlayer, toggleCurrentPlayer] = useState<"X" | "O">("X");
  const [draw, declareDraw] = useState(false);
  const [gameOver, toggleGameOver] = useState(false);

  function changePlayers() {
    toggleCurrentPlayer((current) => {
      if (current === "X") {
        return "O";
      }
      return "X";
    });
  }

  function updateMarkFunction(marked: boolean, position: number) {
    if (marked === true || gameOver === true) {
      return;
    }
    roundsPlayed++;
    changePlayers();
    updateBoardMarks((current) => {
      current[position].marked = true;
      current[position].symbol = currentPlayer;
      if (shouldGameEnd(current)) {
        toggleGameOver(true);
      } else {
        if (roundsPlayed === 9) {
          toggleGameOver(true);
          declareDraw(true);
        }
      }
      return current;
    });
  }
  console.log(baseBoardMarks);

  return (
    <>
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
            resetBoard(baseBoardMarks);
            updateBoardMarks(baseBoardMarks);
            toggleGameOver(false);
            updateRoundsPlayed(0);
            declareDraw(false);
            changePlayers();
          }}
        />
      )}
    </>
  );
}
