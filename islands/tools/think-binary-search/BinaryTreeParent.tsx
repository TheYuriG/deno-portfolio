//? UI Components
import { StyledButton } from "../../../components/UI/StyledButton.tsx";
import { StyledSlider } from "../../../components/UI/StyledSlider.tsx";
import { StyledInput } from "../../../components/UI/StyledInput.tsx";
//? Page specific components
import { BinaryTreeArray } from "../../../components/tools/think-binary-tree/BinaryTreeArray.tsx";

//? Validation enum for input
import { validationStatus } from "../../../types/forms/validationStatus.ts";

//? Managing state in component
import { useState } from "preact/hooks";

//? Types
import { DifficultyOptionsType } from "../../../types/component-properties/tools/think-binary-search/DifficultyOptions.ts";

//? Service functions
import { generateArrayOfUniqueNumbers } from "../../../services/think-binary-tree/generateArrayOfUniqueNumbers.ts";
import { disableLeastNodesBasedOnBreakpoint } from "../../../services/think-binary-tree/disableLeastNodesBasedOnBreakpoint.ts";

function validateTreeNodeNumber(input: number, min: number, max: number) {
  if (input >= min && input <= max) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}

export function BinaryTreeParent(
  { arraySize, arrayOrder, arrayAssists }: DifficultyOptionsType,
) {
  const [attempts, setAttempts] = useState<number>(0);
  const [arrayOfNumbers, setArrayOfNumbers] = useState(
    generateArrayOfUniqueNumbers(arraySize),
  );
  const [[minTreeValue, maxTreeValue], setTreeMinMax] = useState<
    [number, number]
  >([
    arrayOfNumbers[0].number,
    arrayOfNumbers[arrayOfNumbers.length - 1].number,
  ]);
  const [treeNode, setTreeNode] = useState(arrayOfNumbers[0].number);
  const [treeNodeValidationStatus, setTreeNodeValidationStatus] = useState<
    validationStatus
  >(validationStatus.Unchanged);

  return (
    <>
      <BinaryTreeArray numbersWithDisabledStatusArray={arrayOfNumbers} />
      <StyledSlider
        min={minTreeValue.toString()}
        max={maxTreeValue.toString()}
        value={treeNode.toString()}
        disabled={true}
      />
      <div class="flex flex-col md:flex-row place-items-center mx-auto w-72">
        <StyledInput
          key="binary-branch"
          labelLink="binary-branch"
          inputType="number"
          label="Pick node"
          name="Tree Branch"
          min={minTreeValue.toString()}
          max={maxTreeValue.toString()}
          value={treeNode.toString()}
          inputFunction={(value) => setTreeNode(Number(value))}
          validationFunction={() => {
            const status = validateTreeNodeNumber(
              treeNode,
              minTreeValue,
              maxTreeValue,
            );
            setTreeNodeValidationStatus(status);
            return status;
          }}
          validationReference={treeNodeValidationStatus}
        />
        <StyledButton
          text="Select"
          classes="mt-2 md:mt-0 md:ml-2"
          onClickFunction={() => {
            setArrayOfNumbers(
              disableLeastNodesBasedOnBreakpoint(
                treeNode,
                arrayOfNumbers,
              ),
            );
            setAttempts((cur) => cur++);
          }}
        />
      </div>
    </>
  );
}
