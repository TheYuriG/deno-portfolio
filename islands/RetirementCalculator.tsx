import { useState } from "preact/hooks";
import { StyledInput } from "../components/UI/StyledInput.tsx";
import { validationStatus } from "../types/misc/validationStatus.ts";
import { validateAge as validateCurrentAge } from "../services/form-validation/validateAge.ts";
import { patternValidation } from "../services/form-validation/patternValidation.ts";
import { StyledButton } from "../components/UI/StyledButton.tsx";
import { ErrorAlert } from "../components/UI/ErrorAlert.tsx";
import { validateRetiringAge } from "../services/form-validation/validateRetirementAge.ts";
import { validateCompensation } from "../services/form-validation/validateCompensation.ts";
import { validateYearlyInvestment } from "../services/form-validation/validateInvestment.ts";

//? Starting values for the form
const defaultFormValues = {
  currentAge: "18",
  plannedRetiringAge: "30",
  compensation: "20000",
  yearlySavings: "10",
};
const defaultFormValidation = {
  currentAge: validationStatus.Unchanged,
  plannedRetiringAge: validationStatus.Unchanged,
  compensation: validationStatus.Unchanged,
  yearlySavings: validationStatus.Unchanged,
};

export default function RetirementCalculator() {
  //? Manages current state for form data
  const [formValues, setValues] = useState(defaultFormValues);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Manages validation state
  const [validationError, updateValidationError] = useState(false);

  function validateBeforeCalculate() {
    //? Track if any validation failed
    let validInput = true;
    //? Track if all fields meet minimum requirements
    const validationsArray = [
      patternValidation(
        formValues.currentAge,
        defaultFormValues.currentAge,
        validateCurrentAge,
      ),
      patternValidation(
        formValues.plannedRetiringAge,
        defaultFormValues.plannedRetiringAge,
        validateRetiringAge,
      ),
      patternValidation(
        formValues.compensation,
        defaultFormValues.compensation,
        validateCompensation,
      ),
      patternValidation(
        formValues.yearlySavings,
        defaultFormValues.yearlySavings,
        validateYearlyInvestment,
      ),
    ];

    //? Check if 'validationsArray' has any invalid validations
    if (validationsArray.includes(validationStatus.Invalid)) {
      updateValidation({
        currentAge: validationsArray[0],
        plannedRetiringAge: validationsArray[1],
        compensation: validationsArray[2],
        yearlySavings: validationsArray[3],
      });
      updateValidationError(true);
      validInput = false;
    }
    //? Validate if retirement age is greater than current age
    if (+formValues.currentAge > +formValues.plannedRetiringAge) {
      updateValidation((currentValues) => ({
        ...currentValues,
        currentAge: validationStatus.Invalid,
        plannedRetiringAge: validationStatus.Invalid,
      }));
      updateValidationError(true);
      validInput = false;
    }
    //? Check if any validation failed
    if (validInput === false) {
      console.log("bad input received, validation is", validationError);
      return;
    }
  }

  return (
    <form class="w-full mb-4 flex flex-col" for="retirement">
      {/* Current Age */}
      <StyledInput
        key="current-age"
        inputType="number"
        label="Current age"
        name="retirement"
        value={formValues.currentAge}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            currentAge: value,
          }))}
        validationReference={formValidationStatus.currentAge}
        validationFunction={() => {
          const result = patternValidation(
            formValues.currentAge,
            defaultFormValues.currentAge,
            validateCurrentAge,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            currentAge: result,
          }));
          return result;
        }}
        min={18}
        max={100}
        helpInformation="Validation: Number between 18 and 100 years (18 < age < 100)"
      />
      {/* Retiring Age */}
      <StyledInput
        key="retiring-age"
        inputType="number"
        label="Retiring age"
        name="retirement"
        value={formValues.plannedRetiringAge}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            plannedRetiringAge: value,
          }))}
        validationReference={formValidationStatus.plannedRetiringAge}
        validationFunction={() => {
          if (+formValues.plannedRetiringAge < +formValues.currentAge) {
            updateValidation((currentValidation) => ({
              ...currentValidation,
              plannedRetiringAge: validationStatus.Invalid,
            }));
            return validationStatus.Invalid;
          }
          const result = patternValidation(
            formValues.plannedRetiringAge,
            defaultFormValues.plannedRetiringAge,
            validateRetiringAge,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            plannedRetiringAge: result,
          }));
          return result;
        }}
        min={30}
        max={100}
        helpInformation="Validation: Number between 30 and 100 years (30 < age < 100). Must be higher than current age."
      />
      {/* Yearly Compensation */}
      <StyledInput
        key="yearly-compensation"
        inputType="number"
        label="Compensation ($/year)"
        name="retirement"
        value={formValues.compensation}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            compensation: value,
          }))}
        validationReference={formValidationStatus.compensation}
        validationFunction={() => {
          if (+formValues.compensation < +formValues.currentAge) {
            updateValidation((currentValidation) => ({
              ...currentValidation,
              compensation: validationStatus.Invalid,
            }));
            return validationStatus.Invalid;
          }
          const result = patternValidation(
            formValues.compensation,
            defaultFormValues.compensation,
            validateCompensation,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            compensation: result,
          }));
          return result;
        }}
        min={20000}
        helpInformation="Validation: Number must be higher than 20K/year."
      />
      {/* Yearly Investment */}
      <StyledInput
        key="yearly-investment"
        inputType="number"
        label="Yearly investment (%)"
        name="retirement"
        value={formValues.yearlySavings}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            yearlySavings: value,
          }))}
        validationReference={formValidationStatus.yearlySavings}
        validationFunction={() => {
          if (+formValues.yearlySavings < +formValues.currentAge) {
            updateValidation((currentValidation) => ({
              ...currentValidation,
              yearlySavings: validationStatus.Invalid,
            }));
            return validationStatus.Invalid;
          }
          const result = patternValidation(
            formValues.yearlySavings,
            defaultFormValues.yearlySavings,
            validateYearlyInvestment,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            yearlySavings: result,
          }));
          return result;
        }}
        min={10}
        max={100}
        helpInformation="Validation: Number between 10% and 100% (10% < return% < 100%)."
      />
      {/* Confirm form input (prints to text area) */}
      <StyledButton
        classes="mt-2 self-center"
        text="Calculate"
        onClickFunction={validateBeforeCalculate}
      />
      {validationError === true && (
        <ErrorAlert
          classes="mt-4"
          errorText="Some fields have invalid data being provided (will display a red border), please fix them before submitting! Hover/click the information icon for more information."
        />
      )}
    </form>
  );
}
