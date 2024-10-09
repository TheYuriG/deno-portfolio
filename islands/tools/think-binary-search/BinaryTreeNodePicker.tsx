//? UI Components
import { StyledButton } from "../../../components/UI/StyledButton.tsx";
import { StyledInput } from "../../../components/UI/StyledInput.tsx";
import { StyledSlider } from "../../../components/UI/StyledSlider.tsx";
import { disableLeastNodesBasedOnBreakpoint } from "../../../services/think-binary-tree/disableLeastNodesBasedOnBreakpoint.ts";
import { NumbersWithStatus } from "../../../types/component-properties/tools/think-binary-search/NumberWithStatus.ts";

//? Validation enum for input
import { validationStatus } from "../../../types/forms/validationStatus.ts";

//? Managing state in island
import { useState } from "preact/hooks";

function validateTreeNodeNumber(input: number, min: number, max: number) {
  if (input >= min && input <= max) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
}

export function BinaryTreeNodePicker(
  { numbersWithDisabledStatus, setNumbersWithDisabledStatus }: {
    numbersWithDisabledStatus: Array<NumbersWithStatus>; setNumbersWithDisabledStatus: (numbersWithDisabledStatus: Array<NumbersWithStatus>) => void
  }
) {
  const [attempts, setAttempts] = useState<number>(0);
  const [treeNodeValidationStatus, setTreeNodeValidationStatus] = useState<
    validationStatus
  >(validationStatus.Unchanged);
  const firstTreeNode = numbersWithDisabledStatus[0].number;
  const lastTreeNode =
    numbersWithDisabledStatus[numbersWithDisabledStatus.length - 1]
      .number;
  const [treeNode, setTreeNode] = useState(firstTreeNode);

  return (
    <>
      <StyledSlider
        min={firstTreeNode.toString()}
        max={lastTreeNode.toString()}
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
          min={firstTreeNode.toString()}
          max={lastTreeNode.toString()}
          value={treeNode.toString()}
          inputFunction={(value) => setTreeNode(Number(value))}
          validationFunction={() => {
            const status = validateTreeNodeNumber(
              treeNode,
              firstTreeNode,
              lastTreeNode,
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
            setNumbersWithDisabledStatus(
              disableLeastNodesBasedOnBreakpoint(
                treeNode,
                numbersWithDisabledStatus,
              ),
            );
            setAttempts((currentNumber) => currentNumber + 1);
          }}
        />
      </div>
      <div class="mx-auto mt-4 mb-2 text-xl">Attempts: {attempts}</div>
    </>
  );
}
