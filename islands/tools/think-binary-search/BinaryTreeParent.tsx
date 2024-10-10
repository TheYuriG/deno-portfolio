//? Page specific components and islands
import { BinaryTreeArray } from "../../../components/tools/think-binary-tree/BinaryTreeArray.tsx";
import { BinaryTreeNodePicker } from "./BinaryTreeNodePicker.tsx";

//? Managing state in island
import { useState } from "preact/hooks";

//? Types
import { DifficultyOptionsType } from "../../../types/component-properties/tools/think-binary-search/DifficultyOptions.ts";

//? Service functions
import { generateArrayOfUniqueNumbers } from "../../../services/think-binary-tree/generateArrayOfUniqueNumbers.ts";

export function BinaryTreeParent(
  { arraySize, arrayOrder, arrayAssists }: DifficultyOptionsType,
) {
  const [numbersWithDisabledStatus, setNumbersWithDisabledStatus] = useState(
    generateArrayOfUniqueNumbers(arraySize),
  );
  const [binaryTreeDraw, setBinaryTreeDraw] = useState<
    Array<"greater" | "lower">
  >([]);

  return (
    <>
      <BinaryTreeArray numbersWithDisabledStatus={numbersWithDisabledStatus} />
      <BinaryTreeNodePicker
        numbersWithDisabledStatus={numbersWithDisabledStatus}
        setNumbersWithDisabledStatus={setNumbersWithDisabledStatus}
        updateBinaryTreeDrawing={setBinaryTreeDraw}
      />
    </>
  );
}
