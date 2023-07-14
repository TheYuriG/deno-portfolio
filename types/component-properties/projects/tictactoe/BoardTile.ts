
//? Information that every board tile needs to contain
export interface BoardTile {
  marked: boolean;
  symbol: string;
  position: number;
}