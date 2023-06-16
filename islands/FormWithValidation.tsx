//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Responsive and styled Label + Input
import { StyledInput } from "../components/UI/StyledInput.tsx";
//? Styled Button to confirm sending the form
import { StyledButton } from "../components/UI/StyledButton.tsx";
//? Styled Select for Employment Status dropdown
import { StyledSelect } from "../components/UI/StyledSelect.tsx";
//? Styled radio for Welfare option
import { StyledRadio } from "../components/UI/StyledRadio.tsx";
//? Styled checkbox for Stimulus Check option
import { StyledCheckboxGroup } from "../components/UI/StyledCheckboxGroup.tsx";

//? Types for typecasting
import { validationStatus } from "../types/validationStatus.ts";
import type { stimulusCheckboxOptions } from "../types/stimulusCheckboxOptions.ts";
import { StyledTextArea } from "../components/UI/StyledTextArea.tsx";

//? Validates the form's name input field
const validateName = (
  name: string,
): validationStatus.Invalid | validationStatus.Valid => {
  //? This RegEx looks for a string of 3 to 40 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{3,40}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning 1 for
  //? valid and -1 for invalid input
  if (validation.test(name)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Validates the form's profession input field
const validateProfession = (
  profession: string,
): validationStatus.Invalid | validationStatus.Valid => {
  //? This RegEx looks for a string of 6 to 20 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{6,20}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning
  //? validationStatus.Valid or validationStatus.Invalid
  if (validation.test(profession)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Validates the form's age numeric input field
const validateAge = (
  age: string,
): validationStatus.Invalid | validationStatus.Valid => {
  if (+age >= 18 && +age <= 100) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Given a current value, initial value and a validation function, return
//? what is the state of validation of the input once the respective field
//? loses focus
function validateInput(
  value: string,
  initialState: string,
  pattern: (
    valueToValidate: string,
  ) => validationStatus.Invalid | validationStatus.Valid,
): validationStatus {
  //? If the field is at initial state, reset validation
  if (value === initialState) {
    return validationStatus.Unchanged;
  } //? If the field is not empty, check if a validation RegEx pattern was provided
  else {
    return pattern(value);
  }
}

//? Placeholder text to be used on the textArea before any data got sent
const textAreaPlaceholder = 'Data will be displayed here as you click "Send".' +
  "\n\nSome key insights for when building this:" +
  "\n- When using other websites, it's very annoying when you tap into a " +
  "field and tap out (without typing anything) and the field gives you a " +
  "validation error. This form doesn't have that problem, it only " +
  "attempts to validate the value if a value was actually provided and " +
  "will reset if the value gets removed." +
  "\n- Regexes are very powerful. I use them to validate login/signup" +
  " on Trophy Place, the form above and probably too many places that" +
  " could probably just use a simple deep equality check.";

//? Assign default form values and validation to avoid duplicating them everywhere
const selectDropdownOptions = [
  "Select one",
  "Too Young to Work",
  "Between Jobs",
  "Employed",
  "Retired",
];
const radioOptions = ["None", "Once", "Twice or More"];
const checkboxOptions: Array<{ value: stimulusCheckboxOptions; name: string }> =
  [
    { value: "individual", name: "Individual ($1000)" },
    { value: "family", name: "Family ($2000)" },
    { value: "business", name: "Business ($10000)" },
  ];
const defaultFormValues = {
  name: "",
  age: 18,
  profession: "",
  employment: selectDropdownOptions[0],
  welfare: radioOptions[0],
  //? Check properties must match stimulusCheckboxOptions' values property
  //! Record<stimulusCheckboxOptions, boolean>
  check: { individual: false, family: false, business: false },
};
const defaultFormValidation = {
  name: validationStatus.Unchanged,
  age: validationStatus.Unchanged,
  profession: validationStatus.Unchanged,
  employment: validationStatus.Unchanged,
  welfare: validationStatus.Unchanged,
  check: validationStatus.Unchanged,
};

//? Creates a form that uses RegExp validation
export default function FormWithValidation() {
  //? Manages current state for form data
  const [formValues, setValues] = useState(defaultFormValues);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Handles textarea's content being populated when "Send" is clicked
  const [sumOfAllInputs, extendSum] = useState([] as Array<string>);
  //? Manages if there is an error text to be displayed
  const [validationError, updateValidationError] = useState(false);

  //? Runs when the user clicks the "Send" button. Validates if the data
  //? should be accepted and wiped or kept and have errors informed.
  function validateBeforeSend(): void {
    //? Initialize the number of errors variable
    let validationErrors = 0;

    updateValidation((currentValidationStatus) => ({
      ...currentValidationStatus,
      age: validationStatus.Valid,
    }));

    //? If the name is empty or invalid, increase errors counter
    if (formValues.name === "") {
      setValues((currentValues) => ({ ...currentValues, name: "N/A" }));
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        name: validationStatus.Invalid,
      }));
      validationErrors++;
    } else if (
      validateInput(formValues.name, defaultFormValues.name, validateName) ===
        validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        name: validationStatus.Invalid,
      }));
    }
    //? If the profession is empty or invalid, increase errors counter
    if (formValues.profession === "") {
      setValues((currentValues) => ({ ...currentValues, profession: "N/A" }));
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        profession: validationStatus.Invalid,
      }));
    } else if (
      validateInput(
        formValues.profession,
        defaultFormValues.profession,
        validateProfession,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        profession: validationStatus.Invalid,
      }));
    }
    //? If the age is invalid, increase errors counter
    if (
      validateInput(
        formValues.age.toString(),
        defaultFormValues.age.toString(),
        validateAge,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        age: validationStatus.Invalid,
      }));
    }
    //? If the employment status is invalid, increase errors counter
    if (formValues.employment === defaultFormValues.employment) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        employment: validationStatus.Invalid,
      }));
    }
    //? If no stimulus checks were chosen, increase errors counter
    if (
      Object.values(formValues.check).filter((status) => status !== false)
        .length === 0
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        check: validationStatus.Invalid,
      }));
    }

    //? If all data is valid, add to the block below
    if (validationErrors > 0) {
      updateValidationError(true);
    } else {
      //? Reset error text and form validation
      updateValidationError(false);
      updateValidation(defaultFormValidation);

      //? When valid data is submitted, reset the form so the user can
      //? try to submit more data
      setValues(() => defaultFormValues);

      //? And add the current data to the display below for checking
      extendSum((
        currentSum,
      ) => [
        ...currentSum,
        //? Adds "number - name: name, age: age, profession: profession, employment: employment, welfare: welfare"
        `${
          currentSum.length + 1
        } - name: ${formValues.name}, age: ${formValues.age}, profession: ${formValues.profession}, employment status: ${formValues.employment}, times on welfare: ${formValues.welfare}, checks desired: ${
          //? Gets all properties, filters to only the ones selected as true
          // {1: true, 2: false, 3: true}
          Object.entries(formValues.check).filter((check) => check[1] === true) // [[1,true],[3,true]]
            //? Return property names
            .map((check) => check[0]) // [1,3]
            //? Join property names with forward slash
            .join("/") // 1/3
        }`,
      ]);
    }
  }

  return (
    <>
      {/* The whole form */}
      <form class="w-full mb-4 flex flex-col">
        {/* Name input */}
        <StyledInput
          key={"first_input"}
          inputType="text"
          validationReference={formValidationStatus.name}
          autoFocus={true}
          label="Name"
          name="name"
          value={formValues.name}
          inputFunction={(inputName) => {
            setValues((currentForm) => ({
              ...currentForm,
              name: inputName,
            }));
          }}
          helpInformation="Validation: 3 to 40 alphabet characters (a-zA-Z)"
          validationFunction={() => {
            const result = validateInput(
              formValues.name,
              defaultFormValues.name,
              validateName,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              name: result,
            }));
            return result;
          }}
        />
        {/* Age number */}
        <StyledInput
          key={"second_input"}
          inputType="number"
          validationReference={formValidationStatus.age as validationStatus}
          label="Age"
          name="age"
          value={formValues.age.toString()}
          inputFunction={(inputAge) => {
            setValues((currentForm) => ({
              ...currentForm,
              age: Number(inputAge),
            }));
          }}
          validationFunction={() => {
            const result = validateInput(
              formValues.age.toString(),
              defaultFormValues.age.toString(),
              validateAge,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              age: result,
            }));
            return result;
          }}
          min={18}
          max={100}
          helpInformation="Validation: Number between 18 and 100 (18 < value < 100)"
        />
        {/* Profession input */}
        <StyledInput
          key={"third_input"}
          inputType="text"
          validationReference={formValidationStatus
            .profession as validationStatus}
          label="Profession"
          name="profession"
          value={formValues.profession}
          inputFunction={(inputProfession) => {
            setValues((currentForm) => ({
              ...currentForm,
              profession: inputProfession,
            }));
          }}
          validationFunction={() => {
            const result = validateInput(
              formValues.profession,
              defaultFormValues.profession,
              validateProfession,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              profession: result,
            }));
            return result;
          }}
          helpInformation="Validation: 6 to 20 alphabet characters (a-zA-Z)"
        />
        {/* Select for employment */}
        <StyledSelect
          name="employment"
          label="Employment Status"
          validationReference={formValidationStatus
            .employment as validationStatus}
          value={formValues.employment}
          optionsArray={selectDropdownOptions}
          onChangeFunction={(input) => {
            setValues((currentForm) => ({
              ...currentForm,
              employment: input,
            }));
            if (input !== selectDropdownOptions[0]) {
              updateValidation((currentValidation) => ({
                ...currentValidation,
                employment: validationStatus.Valid,
              }));
            }
          }}
        />
        {/* Styled radio */}
        <StyledRadio
          label="Times on Welfare"
          name="welfare"
          starterValue={formValues.welfare}
          onChangeFunction={(newWelfareValue) => {
            setValues((currentFormValues) => ({
              ...currentFormValues,
              welfare: newWelfareValue,
            }));
          }}
          optionsArray={radioOptions}
        />
        {/* Styled checkbox */}
        <StyledCheckboxGroup
          label="Stimulus Check desired"
          optionsArray={checkboxOptions}
          stateForCheckedReference={formValues.check}
          validationReference={formValidationStatus
            .check as validationStatus}
          onChangeFunction={(
            checkName: stimulusCheckboxOptions,
          ) => {
            setValues((currentFormValues) => {
              const editedValues = {
                ...currentFormValues,
                check: { ...currentFormValues.check },
              };
              editedValues.check[checkName] = !editedValues.check[checkName];

              //? Reset checkbox validation if user clicked any of the options
              updateValidation((currentValidation) => ({
                ...currentValidation,
                check: validationStatus.Unchanged,
              }));

              return editedValues;
            });
          }}
        />
        {/* Confirm form input (prints to text area) */}
        <StyledButton
          classes="mt-2 self-center"
          text="Send"
          onClickFunction={validateBeforeSend}
        />
        {validationError === true && (
          <>
            <p class="my-2 text-justify">
              Some fields have invalid data being provided (will display a red
              border), please fix them before submitting! Hover/click the
              information icon on the right side for more information.
            </p>
          </>
        )}
      </form>
      {/* Text Area that will hold all sent information */}
      <StyledTextArea
        name="formInput"
        id="form"
        placeholder={sumOfAllInputs.length > 0
          ? sumOfAllInputs.join("\n")
          : textAreaPlaceholder}
        minHeight="16.5em"
        disabled={true}
      />
    </>
  );
}
