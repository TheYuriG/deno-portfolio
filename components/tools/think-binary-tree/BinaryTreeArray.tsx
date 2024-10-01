//? Types
import { NumbersWithStatus } from "../../../types/component-properties/tools/think-binary-search/NumberWithStatus.ts";

export function BinaryTreeArray(
  { numbersWithDisabledStatus }: {
    numbersWithDisabledStatus: Array<NumbersWithStatus>;
  },
) {
  return (
    <div class="flex flex-1 place-items-center w-full -px-2">
      <span class="custom-tx-ac text-[7rem]">[</span>
      <div class="flex flex-wrap place-content-between gap-1 -mx-4">
        {...numbersWithDisabledStatus.map((index) => (
          <span
            class={"text-2xl custom-tx-nc mx-2" +
              (index.disabled ? " opacity-60" : "")}
          >
            {index.number}
          </span>
        ))}
      </div>
      <span class="custom-tx-ac text-[7rem]">]</span>
    </div>
  );
}
