//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Responsive and styled Label + Input
import StyledInput from "./StyledInput.tsx";
//? Styled Button to confirm sending the form
import StyledButton from "./StyledButton.tsx";

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
): number {
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
  "attempts to validate the value if a value was actually provided." +
  "\n- Regexes are very powerful. I use them to validate login/signup" +
  " on Trophy Place, the form above and probably too many places that" +
  " could probably just use a simple deep equality check.";

//? Creates a form that uses RegExp validation
export default function FormWithValidation() {
  //? Manages current state for form data
  const [formValues, setValues] = useState({
    name: "",
    age: 18,
    profession: "",
  });
  //? Handles textarea's content being populated when "Send" is clicked
  const [sumOfAllInputs, extendSum] = useState([] as Array<string>);
  //? Manages if there is an error text to be displayed
  const [validationError, updateValidationError] = useState(false);

  //? Runs when the user clicks the "Send" button. Validates if the data
  //? should be accepted and wiped or kept and have errors informed.
  function validateBeforeSend(): void {
    //? Initialize the number of errors variable
    let validationErrors = 0;

    //? If the name is empty or invalid, increase errors counter
    if (formValues.name === "") {
      setValues((currentValues) => ({ ...currentValues, name: "N/A" }));
      validationErrors++;
    } else if (validateInput(formValues.name, "", validateName) === -1) {
      validationErrors++;
    }
    //? If the profession is empty or invalid, increase errors counter
    if (formValues.profession === "") {
      setValues((currentValues) => ({ ...currentValues, profession: "N/A" }));
      validationErrors++;
    } else if (
      validateInput(formValues.profession, "", validateProfession) === -1
    ) {
      validationErrors++;
    }
    //? If the age is invalid, increase errors counter
    if (validateInput(formValues.age.toString(), "", validateAge) === -1) {
      validationErrors++;
    }

    //? If all data is valid, add to the block below
    if (validationErrors > 0) {
      updateValidationError(true);
    } else {
      //? Reset error text
      updateValidationError(false);

      //? When valid data is submitted, reset the form so the user can
      //? try to submit more data
      setValues(() => ({
        name: "",
        age: 18,
        profession: "",
      }));

      //? And add the current data to the display below for checking
      extendSum((
        currentSum,
      ) => [
        ...currentSum,
        //? Adds "number - name: name, age: age, profession: profession"
        `${
          currentSum.length + 1
        } - name: ${formValues.name}, age: ${formValues.age}, profession: ${formValues.profession}`,
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
          validationFunction={() =>
            validateInput(formValues.name, "", validateName)}
        />
        {/* Age number */}
        <StyledInput
          key={"second_input"}
          inputType="number"
          label="Age"
          name="age"
          value={formValues.age.toString()}
          inputFunction={(inputAge) => {
            setValues((currentForm) => ({
              ...currentForm,
              age: Number(inputAge),
            }));
          }}
          validationFunction={() =>
            validateInput(formValues.age.toString(), "", validateAge)}
          min={18}
          max={100}
          helpInformation="Validation: Number between 18 and 100 (18 < value < 100)"
        />
        {/* Profession input */}
        <StyledInput
          key={"third_input"}
          inputType="text"
          label="Profession"
          name="profession"
          value={formValues.profession}
          inputFunction={(inputProfession) => {
            setValues((currentForm) => ({
              ...currentForm,
              profession: inputProfession,
            }));
          }}
          validationFunction={() =>
            validateInput(formValues.profession, "", validateProfession)}
          helpInformation="Validation: 6 to 20 alphabet characters (a-zA-Z)"
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
              Some fields have invalid data being provided! Please fix them
              before submitting! Invalid fields will not have a green border
              around them. Hover/click the information icon on the right side
              for more information.
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
