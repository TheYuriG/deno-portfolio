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

  return (
    <>
      {/* The whole form */}
      <form class="styled-form">
        {/* Name input */}
        <StyledInput
          key={"name"}
          inputType="text"
          autoFocus={true}
          label="Name"
          name="name"
          value={formValues.name}
          placeholder=""
          inputFunction={(inputName) => {
            setValues((currentForm) => ({
              ...currentForm,
              name: inputName,
            }));
          }}
        />
        {/* Age number */}
        <StyledInput
          key={"age"}
          inputType="number"
          label="Age"
          name="age"
          value={formValues.age.toString()}
          placeholder=""
          inputFunction={(inputAge) => {
            setValues((currentForm) => ({
              ...currentForm,
              age: Number(inputAge),
            }));
          }}
          min={18}
          max={100}
        />
        {/* Profession input */}
        <StyledInput
          key={"profession"}
          inputType="text"
          label="Profession"
          name="profession"
          value={formValues.profession}
          placeholder=""
          inputFunction={(inputProfession) => {
            setValues((currentForm) => ({
              ...currentForm,
              profession: inputProfession,
            }));
          }}
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
        placeholder={sumOfAllInputs.join("\n")}
        disabled
      >
      </textarea>
    </>
  );
}
