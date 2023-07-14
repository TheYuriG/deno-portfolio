import { CircleIcon } from "../../../assets/CircleIcon.tsx";
import { XMarkIcon } from "../../../assets/XMarkIcon.tsx";

export function TicTacToeTile(
  { mark, played, updateMarkFunction, currentPlayer, position, gameStatus }: {
    mark: boolean;
    played: string;
    updateMarkFunction: () => void;
    currentPlayer: string;
    position: number;
    gameStatus: boolean;
  },
) {
  return (
    <button
      key={position}
      class={`relative w-24 md:w-32 h-24 md:h-32 custom-bo-ac group${
        !gameStatus
          //? If the game has ongoing, hovering a tile should turn the cursor
          //? into a pointer (button HTML element's default)
          ? ""
          //? Otherwise, once the game ends, all tiles
          //? should display the normal cursor on hover instead
          : " cursor-default"
      }`}
      onClick={updateMarkFunction}
    >
      {/* If the tile wasn't marked yet, display the player icon on hover */}
      <div
        class={`absolute ${
          mark
            //? If the tile is marked, display the symbol
            ? ""
            //! Otherwise, hide the symbol until hovered
            : "hidden group-hover:block "
        }top-1/2 left-1/2 -translate-1/2`}
      >
        {
          // Render the X icon if either the tile was played as X OR
          played === "X" ||
            // if the current tile wasn't played AND X is the current player.
            !mark && currentPlayer === "X"
            ? (
              <XMarkIcon
                iconHeight="7em"
                iconWidth="7em"
                iconFillColor={mark
                  ? "var(--accent-color)"
                  : gameStatus
                  ? "transparent"
                  : "var(--neutral-color)"}
                iconStrokeWidth="1em"
                iconStrokeColor={"var(--base-color)"}
              />
            )
            // If both of are false statements, render the Circle instead
            : (
              <CircleIcon
                iconHeight="5em"
                iconWidth="5em"
                iconFillColor={mark
                  ? "var(--accent-color)"
                  : gameStatus
                  ? "transparent"
                  : "var(--neutral-color)"}
                iconStrokeWidth="0.25em"
                iconStrokeColor={mark
                  ? "var(--accent-color)"
                  : gameStatus
                  ? "transparent"
                  : "var(--neutral-color)"}
              />
            )
        }
      </div>
    </button>
  );
}
