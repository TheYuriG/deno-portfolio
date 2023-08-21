//? State management
import { useState } from "preact/hooks";
//? Components
import { StyledButton } from "../../../components/UI/StyledButton.tsx";
import { StyledInput } from "../../../components/UI/StyledInput.tsx";
import ExpressionVisualizationList from "./ExpressionVisualizationList.tsx";
//? Validation
import { validationStatus } from "../../../types/forms/validationStatus.ts";
import { validateNonEmptyText } from "../../../services/form-validation/validateNonEmptyText.ts";
//? Diff function
import { differenceBetweenStrings } from "../../../services/expression-visualizer/differenceBetweenStrings.ts";

//? Types
import type { visualizationStep } from "../../../types/component-properties/tools/expression-visualizer/VisualizationStep.ts";
type partialVisualizer = Pick<
  visualizationStep,
  "expressionText" | "evaluatedText"
>;
type ValidationStatuses<K extends keyof partialVisualizer> = Record<
  K,
  validationStatus
>;
//? Set base state values
const baseState: partialVisualizer = {
  expressionText: "const result = 5 * 5;",
  evaluatedText: "const result = 25&;;",
};
const baseValidation: ValidationStatuses<"expressionText" | "evaluatedText"> = {
  expressionText: validationStatus.Unchanged,
  evaluatedText: validationStatus.Unchanged,
};

export default function ExpressionVisualizerPlus() {
  //? Manages current state for form data
  const [formValues, setValues] = useState<partialVisualizer>(baseState);
  //? Manages the form validation state
  const [formValidation, setValidation] = useState(baseValidation);
  //? Manages visualization data
  const [visualization, setVisualization] = useState<visualizationStep[]>([]);

  return (
    <>
      <form class="w-full mb-4 flex flex-col" htmlFor="visualization">
        {/* Expression text. Fades out and becomes the evaluated text */}
        <StyledInput
          key="expression-text"
          inputType="text"
          label="Expression"
          labelLink="expression-text"
          name="expression"
          value={formValues.expressionText}
          inputFunction={(input) => {
            setValues({
              expressionText: input,
              evaluatedText: input,
            });
            setValidation({
              expressionText: validateNonEmptyText(input),
              evaluatedText: validateNonEmptyText(input),
            });
          }}
          validationReference={formValidation.expressionText}
          validationFunction={(input) => validateNonEmptyText(input.toString())}
        />
        {/* Evaluation text. Fades in after the Expression text fades out */}
        <StyledInput
          key="evaluated-text"
          inputType="text"
          label="Result"
          labelLink="evaluated-text"
          name="evaluated"
          value={formValues.evaluatedText}
          inputFunction={(input) => {
            setValues((currentState) => ({
              ...currentState,
              evaluatedText: input,
            }));
            setValidation((current) => ({
              ...current,
              evaluatedText: validateNonEmptyText(input),
            }));
          }}
          validationReference={formValidation.evaluatedText}
          validationFunction={() => validationStatus.Unchanged}
        />
        {/* Add validation step button */}
        <StyledButton
          text="Add step"
          classes="self-center m-4"
          onClickFunction={() => {
            if (formValues.expressionText === formValues.evaluatedText) {
              setValidation((current) => ({
                ...current,
                evaluatedText: validationStatus.Invalid,
              }));
              return;
            }
            //? Parse the difference between both strings
            const [leadingText, expressionText, evaluatedText, trailingText] =
              differenceBetweenStrings(
                formValues.expressionText,
                formValues.evaluatedText,
              );
            //? Using the strings difference, create the next entry for the visualizer
            setVisualization((
              current,
            ) => [...current, {
              leadingText,
              expressionText,
              evaluatedText,
              trailingText,
              id: crypto.randomUUID(),
            }]);
            //? Update form values to both have the result text
            setValues((current) => ({
              expressionText: current.evaluatedText,
              evaluatedText: current.evaluatedText,
            }));
          }}
        />
      </form>
      {/* Display steps */}
      <ExpressionVisualizationList
        visualizationList={visualization}
        deleteItem={(deletedItemId) => {
          setVisualization((current) =>
            current.filter((item) => item.id !== deletedItemId)
          );
        }}
      />
    </>
  );
}
