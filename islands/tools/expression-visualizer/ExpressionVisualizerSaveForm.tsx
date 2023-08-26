import { useState } from "preact/hooks";
import { StyledInput } from "../../../components/UI/StyledInput.tsx";
import { validationStatus } from "../../../types/forms/validationStatus.ts";
import { StyledButton } from "../../../components/UI/StyledButton.tsx";
import { visualizationStep } from "../../../types/component-properties/tools/expression-visualizer/VisualizationStep.ts";
import { LoadingAnimation } from "../../../assets/LoadingAnimation.tsx";
import { ErrorAlert } from "../../../components/UI/ErrorAlert.tsx";

const baseValidation = {
  name: validationStatus.Invalid,
  description: validationStatus.Invalid,
};

export function ExpressionVisualizerSaveForm(
  { expressions }: { expressions: visualizationStep[] },
) {
  const [expressionName, setExpressionName] = useState("");
  const [expressionDescription, setExpressionDescription] = useState("");
  const [formValidation, updateFormValidation] = useState(baseValidation);
  const [isSubmittingForm, toggleSubmittingForm] = useState(false);
  const [submissionErrors, updateSubmissionErrors] = useState("");

  if (isSubmittingForm === true) {
    return (
      <LoadingAnimation
        iconHeight="10em"
        iconWidth="10em"
        iconStrokeColor="var(--accent-color)"
      />
    );
  }

  return (
    <>
      {submissionErrors !== "" &&
        <ErrorAlert classes="my-2" errorText={submissionErrors} />}
      <form class="my-4 w-full flex flex-col" name="submit-expression">
        {/* Expression name to save */}
        <StyledInput
          label="Expression name"
          inputType="text"
          name="submit-expression"
          value={expressionName}
          inputFunction={(value) => {
            setExpressionName(value);
          }}
          validationFunction={(input) => {
            let result = validationStatus.Invalid;
            if (input !== "") {
              result = validationStatus.Valid;
            }
            updateFormValidation((currentValidation) => ({
              ...currentValidation,
              name: result,
            }));
            return result;
          }}
          validationReference={formValidation.name}
          labelLink="name"
          key="expression-title"
        />
        {/* Expression description to save */}
        <StyledInput
          label="Expression description"
          inputType="text"
          name="submit-expression"
          value={expressionDescription}
          inputFunction={(value) => {
            setExpressionDescription(value);
          }}
          validationFunction={(input) => {
            let result = validationStatus.Invalid;
            if (input !== "") {
              result = validationStatus.Valid;
            }
            updateFormValidation((currentValidation) => ({
              ...currentValidation,
              description: result,
            }));
            return result;
          }}
          validationReference={formValidation.description}
          labelLink="description"
          key="expression-description"
        />
        {formValidation.name === validationStatus.Valid &&
          formValidation.description === validationStatus.Valid && (
          <StyledButton
            classes="self-center my-2"
            text="Save"
            onClickFunction={() => {
              toggleSubmittingForm(true);
              fetch("/tools/view-expression/new", {
                method: "POST",
                body: JSON.stringify({
                  title: expressionName,
                  description: expressionDescription,
                  expressions,
                }),
              }).then((resp) => {
                console.log(resp);
                if (resp.ok === true) {
                  window.location.href = resp.url;
                } else {
                  resp.json().then((bodyObj) => {
                    updateSubmissionErrors(bodyObj.message);
                  });
                  toggleSubmittingForm(false);
                }
              });
            }}
          />
        )}
      </form>
    </>
  );
}
