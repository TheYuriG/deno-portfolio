//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Responsive and styled Label + Input
import StyledInput from "./StyledInput.tsx";
//? Styled Button to confirm sending the form
import StyledButton from "./StyledButton.tsx";
//? Styled Select for Employment Status dropdown
import StyledSelect from "./StyledSelect.tsx";

//? Validation values for typecasting
type validationStatus = -1 | 0 | 1;

//? Validates the form's name input field
const validateName = (name: string): -1 | 1 => {
  //? This RegEx looks for a string of 3 to 40 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{3,40}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning 1 for
  //? valid and -1 for invalid input
  if (validation.test(name)) {
    return 1;
  } else {
    return -1;
  }
};

//? Validates the form's profession input field
const validateProfession = (profession: string): -1 | 1 => {
  //? This RegEx looks for a string of 6 to 20 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2})[a-zA-Z -]{6,20}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning 1 for
  //? valid and -1 for invalid input
  if (validation.test(profession)) {
    return 1;
  } else {
    return -1;
  }
};

//? Validates the form's age numeric input field
const validateAge = (age: string): -1 | 1 => {
  if (+age >= 18 && +age <= 100) {
    return 1;
  } else {
    return -1;
  }
};

//? Given a current value, initial value and a validation function, return
//? what is the state of validation of the input once the respective field
//? loses focus
function validateInput(
  value: string,
  initialState: string,
  pattern: (valueToValidate: string) => -1 | 1,
): validationStatus {
  //? If the field is at initial state, reset validation
  if (value === initialState) {
    return 0;
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
const defaultFormValues = {
  name: "",
  age: 18,
  profession: "",
  employment: "Select one",
};
const defaultFormValidation = {
  name: 0,
  age: 0,
  profession: 0,
  employment: 0,
};

const selectOptions = [
  "Select one",
  "Too Young to Work",
  "Between Jobs",
  "Employed",
  "Retired",
];

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
      age: 1,
    }));

    //? If the name is empty or invalid, increase errors counter
    if (formValues.name === "") {
      setValues((currentValues) => ({ ...currentValues, name: "N/A" }));
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        name: -1,
      }));
      validationErrors++;
    } else if (
      validateInput(formValues.name, defaultFormValues.name, validateName) ===
        -1
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        name: -1,
      }));
    }
    //? If the profession is empty or invalid, increase errors counter
    if (formValues.profession === "") {
      setValues((currentValues) => ({ ...currentValues, profession: "N/A" }));
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        profession: -1,
      }));
    } else if (
      validateInput(
        formValues.profession,
        defaultFormValues.profession,
        validateProfession,
      ) === -1
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        profession: -1,
      }));
    }
    //? If the age is invalid, increase errors counter
    if (
      validateInput(
        formValues.age.toString(),
        defaultFormValues.age.toString(),
        validateAge,
      ) === -1
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        age: -1,
      }));
    }
    //? If the age is invalid, increase errors counter
    if (formValues.employment === defaultFormValues.employment) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        employment: -1,
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
        //? Adds "number - name: name, age: age, profession: profession"
        `${
          currentSum.length + 1
        } - name: ${formValues.name}, age: ${formValues.age}, profession: ${formValues.profession}, employment status: ${formValues.employment}`,
      ]);
    }
  }

  return (
    <>
      {/* The whole form */}
      <form class="styled-form">
        {/* Name input */}
        <StyledInput
          key={"first_input"}
          inputType="text"
          validationReference={formValidationStatus.name as validationStatus}
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
          optionsArray={selectOptions}
          onChangeFunction={(input) => {
            setValues((currentForm) => ({
              ...currentForm,
              employment: input,
            }));
            if (input !== selectOptions[0]) {
              updateValidation((currentValidation) => ({
                ...currentValidation,
                employment: 1,
              }));
            }
          }}
        />
        {/* Confirm button (prints to text area) */}
        <StyledButton
          text="Send"
          style="margin-top: 0.5em;"
          onClickFunction={validateBeforeSend}
        />
        {validationError === true && (
          <>
            <p class="space">
              Some fields have invalid data being provided (will display a red
              border), please fix them before submitting! Hover/click the
              information icon on the right side for more information.
            </p>
          </>
        )}
      </form>
      {/* Text Area that will hold all sent information */}
      <textarea
        class="base-form-style styled-text-area"
        name="formInput"
        id="form"
        placeholder={sumOfAllInputs.length > 0
          ? sumOfAllInputs.join("\n")
          : textAreaPlaceholder}
        disabled
      >
      </textarea>
    </>
  );
}
