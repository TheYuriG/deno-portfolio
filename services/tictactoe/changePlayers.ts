//? Toggles which player should be next
export function changePlayers(current: "X" | "O") {
  if (current === "X") {
    return "O";
  }
  return "X";
}
