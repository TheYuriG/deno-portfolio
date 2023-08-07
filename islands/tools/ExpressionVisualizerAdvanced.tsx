//? State management
import { useState } from "preact/hooks";
//? Components
import { StyledButton } from "../../components/UI/StyledButton.tsx";
import { StyledInput } from "../../components/UI/StyledInput.tsx";
import ExpressionVisualizationList from "./ExpressionVisualizationList.tsx";
//? Validation
import { validationStatus } from "../../types/forms/validationStatus.ts";
import { validateNonEmptyText } from "../../services/form-validation/validateNonEmptyText.ts";
//? Type
import type { visualizer } from "../../types/component-properties/tools/expression-visualizer/Visualizer.ts";
type ValidationStatuses<K extends keyof visualizer> = Record<
  K,
  validationStatus
>;

//? Set base state values
const baseState: visualizer = {
  //   leadingText: "",
  leadingText: "const b = ",
  //   expressionText: "",
  expressionText: "5 * 5",
  //   evaluatedText: "",
  evaluatedText: "25",
  //   trailingText: "",
  trailingText: ";",
};
const baseValidation: ValidationStatuses<"expressionText" | "evaluatedText"> = {
  expressionText: validationStatus.Unchanged,
  evaluatedText: validationStatus.Unchanged,
};

export default function ExpressionVisualizerAdvanced() {
  //? Manages current state for form data
  const [formValues, setValues] = useState<visualizer>(baseState);
  //? Manages the form validation state
  const [formValidation, setValidation] = useState(baseValidation);
  //? Manages visualization data
  const [visualization, setVisualization] = useState<visualizer[]>([]);

  //   console.log(formValues);
  return (
    <>
      <form class="w-full mb-4 flex flex-col" htmlFor="visualization">
        {/* Leading text. Displays before the expression */}
        <StyledInput
          key="leading-text"
          inputType="text"
          label="Leading text"
          labelLink="leading-text"
          name="leading"
          value={formValues.leadingText}
          inputFunction={(input) => {
            setValues((currentState) => ({
              ...currentState,
              leadingText: input,
            }));
          }}
          validationReference={validationStatus.Unchanged}
          validationFunction={() => validationStatus.Unchanged}
        />
        {/* Expression text. Fades out and becomes the evaluated text */}
        <StyledInput
          key="expression-text"
          inputType="text"
          label="Expression"
          labelLink="expression-text"
          name="expression"
          value={formValues.expressionText}
          inputFunction={(input) => {
            setValues((currentState) => ({
              ...currentState,
              expressionText: input,
            }));
            setValidation((current) => ({
              ...current,
              expressionText: validateNonEmptyText(input),
            }));
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
        {/* Trailing text. Displays after the expression */}
        <StyledInput
          key="trailing-text"
          inputType="text"
          label="Trailing text"
          labelLink="trailing-text"
          name="trailing"
          value={formValues.trailingText}
          inputFunction={(input) => {
            setValues((currentState) => ({
              ...currentState,
              trailingText: input,
            }));
          }}
          validationReference={validationStatus.Unchanged}
          validationFunction={() => validationStatus.Unchanged}
        />
        {/* Add validation step button */}
        <StyledButton
          text="Add step"
          classes="self-center m-4"
          onClickFunction={() => {
            setVisualization((current) => [...current, formValues]);
            setValues((current) => ({
              leadingText: current.leadingText +
                current.evaluatedText + current.trailingText,
              expressionText: "",
              evaluatedText: "",
              trailingText: "",
            }));
          }}
        />
      </form>
      {/* Display steps */}
      <ExpressionVisualizationList visualizationList={visualization} />
    </>
  );
}
