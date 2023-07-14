//? Import maximum number of tiles in a board
import { MAX_TICTACTOE_TILES } from "../../data/projects/tictactoe/maxTiles.ts";
//? Import interface for typecasting
import { BoardTile } from "../../types/component-properties/projects/tictactoe/BoardTile.ts";

//? Reset the board and populate it with 9 empty elements to render new tiles
export function resetBoardFunction(board: BoardTile[]) {
  //? Board reset
  board.length = 0;
  //? Adds 9 elements
  for (let tileIndex = 0; tileIndex < MAX_TICTACTOE_TILES; tileIndex++) {
    board.push(
      { marked: false, symbol: "", position: tileIndex },
    );
  }
}
