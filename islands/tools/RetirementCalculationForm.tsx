//? State management
import { StateUpdater, useState } from "preact/hooks";
import { validationStatus } from "../../types/misc/validationStatus.ts";
//? Components
import { StyledInput } from "../../components/UI/StyledInput.tsx";
import { StyledButton } from "../../components/UI/StyledButton.tsx";
import { ErrorAlert } from "../../components/UI/ErrorAlert.tsx";
//? Validation
import { patternValidation } from "../../services/form-validation/patternValidation.ts";
import { validateAge as validateCurrentAge } from "../../services/form-validation/validateAge.ts";
import { validateRetiringAge } from "../../services/form-validation/validateRetirementAge.ts";
import { validateCompensation } from "../../services/form-validation/validateCompensation.ts";
import { validateYearlyInvestment } from "../../services/form-validation/validateInvestment.ts";
import { validateOneOrGreater } from "../../services/form-validation/validateOneOrGreater.ts";
import { validateZeroOrGreater } from "../../services/form-validation/validateZeroOrGreater.ts";

//? Base state data
import { baseRetirementStats } from "../../types/retirement-calculator/baseRetirementStats.ts";
const defaultFormValidation = {
  currentAge: validationStatus.Unchanged,
  plannedRetiringAge: validationStatus.Unchanged,
  compensation: validationStatus.Unchanged,
  yearlySavings: validationStatus.Unchanged,
  returns: validationStatus.Unchanged,
  starterSavings: validationStatus.Unchanged,
  additionalIncome: validationStatus.Unchanged,
};

//? Export form with values to be used to calculate the retirement projection
export default function RetirementCalculatorForm(
  { formValues, setValues, updateValuesToCalculate }: {
    formValues: typeof baseRetirementStats;
    setValues: StateUpdater<typeof baseRetirementStats>;

    updateValuesToCalculate: StateUpdater<
      typeof baseRetirementStats | undefined
    >;
  },
) {
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Manages validation state
  const [validationError, updateValidationError] = useState(false);

  //? Validates if the data on the form should be accepted or rejected
  function validateBeforeAcceptInput() {
    //? Track if any validation failed
    let validInput = true;
    //? Track if all fields meet minimum requirements
    const validationsArray = [
      patternValidation(
        formValues.currentAge,
        baseRetirementStats.currentAge,
        validateCurrentAge,
      ),
      patternValidation(
        formValues.plannedRetiringAge,
        baseRetirementStats.plannedRetiringAge,
        validateRetiringAge,
      ),
      patternValidation(
        formValues.compensation,
        baseRetirementStats.compensation,
        validateCompensation,
      ),
      patternValidation(
        formValues.yearlySavings,
        baseRetirementStats.yearlySavings,
        validateYearlyInvestment,
      ),
      patternValidation(
        formValues.returns,
        baseRetirementStats.returns,
        validateOneOrGreater,
      ),
      patternValidation(
        formValues.starterSavings,
        baseRetirementStats.starterSavings,
        validateZeroOrGreater,
      ),
      patternValidation(
        formValues.additionalIncome,
        baseRetirementStats.additionalIncome,
        validateZeroOrGreater,
      ),
    ];

    //? Check if 'validationsArray' has any invalid validations
    if (validationsArray.includes(validationStatus.Invalid)) {
      updateValidation({
        currentAge: validationsArray[0],
        plannedRetiringAge: validationsArray[1],
        compensation: validationsArray[2],
        yearlySavings: validationsArray[3],
        returns: validationsArray[4],
        starterSavings: validationsArray[5],
        additionalIncome: validationsArray[6],
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
      return;
    }
    updateValuesToCalculate(formValues);
    updateValidationError(false);
  }

  return (
    <form class="w-full mb-4 flex flex-col" for="retirement">
      {/* Current Age */}
      <StyledInput
        key="current-age"
        inputType="number"
        label="Current age"
        labelLink="current-age"
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
            baseRetirementStats.currentAge,
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
        helpInformation="Validation: Number between 18 and 100 years (18 < age < 100)."
      />
      {/* Retiring Age */}
      <StyledInput
        key="retiring-age"
        inputType="number"
        label="Retiring age"
        labelLink="retiring-age"
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
            baseRetirementStats.plannedRetiringAge,
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
        labelLink="compensation"
        name="retirement"
        value={formValues.compensation}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            compensation: value,
          }))}
        validationReference={formValidationStatus.compensation}
        validationFunction={() => {
          const result = patternValidation(
            formValues.compensation,
            baseRetirementStats.compensation,
            validateCompensation,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            compensation: result,
          }));
          return result;
        }}
        min={20000}
        step={100}
        helpInformation="Validation: Number must be higher than 20K/year. You should include here any income from side hustles as well."
      />
      {/* Yearly Investment */}
      <StyledInput
        key="yearly-investment"
        inputType="number"
        label="Investment (%/year)"
        labelLink="yearly-investment"
        name="retirement"
        value={formValues.yearlySavings}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            yearlySavings: value,
          }))}
        validationReference={formValidationStatus.yearlySavings}
        validationFunction={() => {
          const result = patternValidation(
            formValues.yearlySavings,
            baseRetirementStats.yearlySavings,
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
      {/* Yearly returns */}
      <StyledInput
        key="yearly-return"
        inputType="number"
        label="Returns (%/year)"
        labelLink="yearly-returns"
        name="retirement"
        value={formValues.returns}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            returns: value,
          }))}
        validationReference={formValidationStatus.returns}
        validationFunction={() => {
          const result = patternValidation(
            formValues.returns,
            baseRetirementStats.returns,
            validateOneOrGreater,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            returns: result,
          }));
          return result;
        }}
        min={1}
        helpInformation="Validation: Number greater than 1%."
      />
      {/* Current savings */}
      <StyledInput
        key="current-savings"
        inputType="number"
        label="Current savings"
        labelLink="current-savings"
        name="retirement"
        value={formValues.starterSavings}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            starterSavings: value,
          }))}
        validationReference={formValidationStatus.starterSavings}
        validationFunction={() => {
          const result = patternValidation(
            formValues.starterSavings,
            baseRetirementStats.starterSavings,
            validateZeroOrGreater,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            starterSavings: result,
          }));
          return result;
        }}
        min={0}
        step={100}
        helpInformation="Validation: Number must not be negative."
      />
      {/* Extra income */}
      <StyledInput
        key="other-income"
        inputType="number"
        label="Pension/other ($/year)"
        labelLink="other-income"
        name="retirement"
        value={formValues.additionalIncome}
        inputFunction={(value) =>
          setValues((currentData) => ({
            ...currentData,
            additionalIncome: value,
          }))}
        validationReference={formValidationStatus.additionalIncome}
        validationFunction={() => {
          const result = patternValidation(
            formValues.additionalIncome,
            baseRetirementStats.additionalIncome,
            validateZeroOrGreater,
          );
          updateValidation((currentValidation) => ({
            ...currentValidation,
            additionalIncome: result,
          }));
          return result;
        }}
        min={0}
        step={100}
        helpInformation="Validation: Number must not be negative. Only add here income that you would make use of after retiring."
      />
      {/* Confirm input */}
      <StyledButton
        classes="mt-2 self-center"
        text="Calculate"
        onClickFunction={validateBeforeAcceptInput}
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
