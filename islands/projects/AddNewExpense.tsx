//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Default styled header
import { StyledSubHeader } from "../../components/UI/StyledSubHeader.tsx";
//? Responsive and styled Label + Input
import { StyledInput } from "../../components/UI/StyledInput.tsx";
//? Styled Button to confirm sending the form
import { StyledButton } from "../../components/UI/StyledButton.tsx";
//? Types for typecasting
import { validationStatus } from "../../types/forms/validationStatus.ts";
//? Validation functions
import { validateExpenseDescription } from "../../services/form-validation/validateExpenseDescription.ts";
import { validateExpenseDate } from "../../services/form-validation/validateExpenseDate.ts";
import { validateOneOrGreater } from "../../services/form-validation/validateOneOrGreater.ts";
import { patternValidation } from "../../services/form-validation/patternValidation.ts";

//* Date formatted as YYYY-MM-DD
const [timezonelessDate, timezoneDateGap] = new Date().toISOString().split("T");
//? How data is initially instantiated
const defaultFormValues = {
  description: "",
  cost: 1,
  date: timezonelessDate,
};
//? Set base validation as unchanged to set as default border
const defaultFormValidation = {
  description: validationStatus.Unchanged,
  cost: validationStatus.Unchanged,
  date: validationStatus.Unchanged,
};

//? Define how data is expected within this island.
//! 'date' start as a Date object, but gets converted later to number to be saved
interface ExpenseFormProperties {
  addNewExpenseFunction: (
    input: { date: Date; description: string; cost: number },
  ) => void;
}

//? Creates a form that uses RegExp validation
export default function AddNewExpenseForm(
  { addNewExpenseFunction }: ExpenseFormProperties,
) {
  //? Manages if form data should be visible
  const [displayForm, showOrHideForm] = useState(false);
  //? Manages current state for form data
  const [formValues, updateFormValues] = useState(defaultFormValues);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Manages if there is an error text to be displayed
  const [validationError, updateValidationError] = useState(false);

  //? Runs when the user clicks the "Send" button. Validates if the data
  //? should be accepted and wiped or kept and have errors informed.
  function validateBeforeAcceptInput(): void {
    //? Initialize the number of errors variable
    let validationErrors = 0;

    updateValidation((currentValidationStatus) => ({
      ...currentValidationStatus,
      cost: validationStatus.Valid,
    }));

    //? If the description is empty or invalid, increase errors counter
    if (formValues.description === "") {
      updateFormValues((currentValues) => ({
        ...currentValues,
        description: "N/A",
      }));
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        description: validationStatus.Invalid,
      }));
      validationErrors++;
    } else if (
      patternValidation(
        formValues.description,
        defaultFormValues.description,
        validateExpenseDescription,
      ) ===
        validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        description: validationStatus.Invalid,
      }));
    }
    //? If the cost is invalid, increase errors counter
    if (
      patternValidation(
        formValues.cost.toString(),
        defaultFormValues.cost.toString(),
        validateOneOrGreater,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        cost: validationStatus.Invalid,
      }));
    }
    //? If the date is empty or invalid, increase errors counter
    if (formValues.date === "") {
      updateFormValues((currentValues) => ({
        ...currentValues,
        date: new Date(2020, 0, 1).toISOString().split("T")[0],
      }));
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        date: validationStatus.Invalid,
      }));
    } else if (
      patternValidation(
        formValues.date,
        defaultFormValues.date,
        validateExpenseDate,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        date: validationStatus.Invalid,
      }));
    }

    //? If all data is valid, add to the block below
    if (validationErrors > 0) {
      updateValidationError(true);
    } else {
      //? Reset error text and form validation
      updateValidationError(false);
      updateValidation(defaultFormValidation);

      addNewExpenseFunction({
        date: new Date(
          formValues.date + "T" + timezoneDateGap,
        ),
        description: formValues.description,
        cost: formValues.cost,
      });

      //? When valid data is submitted, reset the form so the user can
      //? try to submit more data
      updateFormValues(() => defaultFormValues);
    }
  }

  //? Create the newExpenseForm to be used if the user clicked "Add New Expense?""
  const newExpenseForm = (
    <>
      <StyledSubHeader title="Add new expense" />
      {/* The whole form */}
      <form class="w-full mb-2 flex flex-col">
        {/* Expense description */}
        <StyledInput
          key="expense-description"
          inputType="text"
          validationReference={formValidationStatus.description}
          label="Description"
          labelLink="expense-description"
          name="description"
          value={formValues.description}
          inputFunction={(inputName) => {
            updateFormValues((currentForm) => ({
              ...currentForm,
              description: inputName,
            }));
          }}
          validationFunction={() => {
            const result = patternValidation(
              formValues.description,
              defaultFormValues.description,
              validateExpenseDescription,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              description: result,
            }));
            return result;
          }}
        />
        {/* Expense Cost */}
        <StyledInput
          key="expense-cost"
          inputType="number"
          validationReference={formValidationStatus.cost as validationStatus}
          label="Cost ($)"
          labelLink="expense-cost"
          name="cost"
          value={formValues.cost.toString()}
          inputFunction={(inputAge) => {
            updateFormValues((currentForm) => ({
              ...currentForm,
              cost: Number(inputAge),
            }));
          }}
          validationFunction={() => {
            const result = patternValidation(
              formValues.cost.toString(),
              defaultFormValues.cost.toString(),
              validateOneOrGreater,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              cost: result,
            }));
            return result;
          }}
          min={1}
        />
        {/* Expense Date */}
        <StyledInput
          key="expense-date"
          inputType="date"
          validationReference={formValidationStatus
            .date as validationStatus}
          label="Date"
          labelLink="expense-date"
          name="date"
          value={formValues.date}
          inputFunction={(inputDate) => {
            updateFormValues((currentForm) => ({
              ...currentForm,
              date: inputDate,
            }));
          }}
          validationFunction={() => {
            const result = patternValidation(
              formValues.date,
              defaultFormValues.date,
              validateExpenseDate,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              date: result,
            }));
            return result;
          }}
          min="2020-01-01"
          max={timezonelessDate}
        />
        {/* Abort new expense */}
        <div class="flex self-end">
          <StyledButton
            classes="mt-2 mr-4"
            text="Reset & Cancel"
            onClickFunction={() => {
              showOrHideForm(false);
              updateValidation({
                description: validationStatus.Unchanged,
                cost: validationStatus.Unchanged,
                date: validationStatus.Unchanged,
              });
              updateFormValues(defaultFormValues);
            }}
          />
          <StyledButton
            classes="mt-2"
            text="Send"
            onClickFunction={validateBeforeAcceptInput}
          />
        </div>
        {validationError === true && (
          <>
            <p class="mt-4">
              Some fields have invalid data being provided (will display a red
              border), please fix them before submitting! Hover/click the
              information icon on the right side for more information.
            </p>
          </>
        )}
      </form>
    </>
  );

  return (
    <div class="flex flex-col items-center custom-bo-nc rounded-xl p-4 mb-4 custom-sh-nc">
      {
        /* If the user never clicked to display the form or cancelled the form,
        show the button that prompts to display the form */
      }
      {!displayForm && (
        <StyledButton
          text="Add new expense?"
          onClickFunction={() => {
            showOrHideForm(true);
          }}
        />
      )}
      {
        /* If the user clicked to show the form, hide the button and
        show the form instead */
      }
      {displayForm && newExpenseForm}
    </div>
  );
}
