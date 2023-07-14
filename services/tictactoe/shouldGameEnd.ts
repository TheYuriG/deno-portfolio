//? Import interface for typecasting
import { BoardTile } from "../../types/component-properties/projects/tictactoe/BoardTile.ts";

//? Checks if the current board meets any condition to complete with a victory
export function shouldGameEnd(boardMarks: BoardTile[]) {
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
    topLeft.marked === true &&
    topLeft.symbol === topMid.symbol && topMid.symbol === topRight.symbol
  ) {
    return true;
  }
  //? Wins on all center is same symbol
  if (
    centerLeft.marked === true &&
    centerLeft.symbol === centerMid.symbol &&
    centerMid.symbol === centerRight.symbol
  ) {
    return true;
  }
  //? Wins on all bottom is same symbol
  if (
    bottomLeft.marked === true &&
    bottomLeft.symbol === bottomMid.symbol &&
    bottomMid.symbol === bottomRight.symbol
  ) {
    return true;
  }
  //? Wins on all right is same symbol
  if (
    topRight.marked === true &&
    topRight.symbol === centerRight.symbol &&
    centerRight.symbol === bottomRight.symbol
  ) {
    return true;
  }
  //? Wins on all mid is same symbol
  if (
    topMid.marked === true &&
    topMid.symbol === centerMid.symbol &&
    centerMid.symbol === bottomMid.symbol
  ) {
    return true;
  }
  //? Wins on all left is same symbol
  if (
    topLeft.marked === true &&
    topLeft.symbol === centerLeft.symbol &&
    centerLeft.symbol === bottomLeft.symbol
  ) {
    return true;
  }
  //? Wins on all top left + center mid + bottom right is same symbol
  if (
    topLeft.marked === true &&
    topLeft.symbol === centerMid.symbol &&
    centerMid.symbol === bottomRight.symbol
  ) {
    return true;
  }
  //? Wins on all top right + center mid + bottom left is same symbol
  if (
    topRight.marked === true &&
    topRight.symbol === centerMid.symbol &&
    centerMid.symbol === bottomLeft.symbol
  ) {
    return true;
  }
  return false;
}
