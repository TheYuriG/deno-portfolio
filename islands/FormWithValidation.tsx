//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Responsive and styled Label + Input
import StyledInput from "./StyledInput.tsx";
//? Styled Button to confirm sending the form
import StyledButton from "./StyledButton.tsx";

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

  //? Placeholder text to be used on the textArea before any data got sent
  const textAreaPlaceholder =
    'Data will be displayed here as you click "Send".' +
    "\n\nSome key insights for when building this:" +
    "\n- When using other websites, it's very annoying when you tap into a " +
    "field and tap out (without typing anything) and the field gives you a " +
    "validation error. This form doesn't have that problem, it only " +
    "attempts to validate the value if a value was actually provided." +
    "\n- Regexes are very powerful. I use them to validate login/signup" +
    " on Trophy Place, the form above and probably too many places that" +
    " could probably just use a simple deep equality check";

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
          validationPattern="^[a-zA-Z]{3,40}$"
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
          validationPattern="^[a-zA-Z]{6,20}$"
          helpInformation="Validation: 6 to 20 alphabet characters (a-zA-Z)"
        />
        {/* Confirm button (prints to text area) */}
        <StyledButton
          text="Send"
          style="margin-top: 0.5em;"
          onClickFunction={() => {
            setValues(() => ({
              name: "",
              age: 18,
              profession: "",
            }));
            extendSum((
              currentSum,
            ) => [
              ...currentSum,
              `${
                currentSum.length + 1
              } - name: ${formValues.name}, age: ${formValues.age}, profession: ${formValues.profession}`,
            ]);
          }}
        />
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
