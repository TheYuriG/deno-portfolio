//? Properties required to build a Radio input
interface RadioProperties {
  label: string;
  name: string;
  starterValue: string;
  optionsArray: Array<string>;
  onChangeFunction: (value: string) => void;
}

//? Exports a styled select with label and options
export default function StyledRadio({
  label,
  name,
  starterValue,
  optionsArray,
  onChangeFunction,
}: RadioProperties) {
  return (
    <div class="my-1 flex flex-col sm:flex-row items-center">
      <span class="w-max flex-shrink-0">
        {label}
      </span>
      <div class="p-2 bg-bc bo-ac rounded-xl flex flex-col sm:flex-row w-min sm:w-max sm:ml-2 flex-wrap place-content-center trs">
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map((radio) => (
          <>
            {/* Label for what this is for */}
            <label class="flex w-max whitespace-nowrap sm:mx-2">
              {/* Radio */}
              <input
                type="radio"
                name={name} //? Links all radio options together
                value={radio} //? Tracks current value
                checked={radio === starterValue} //? Track if this option should be checked
                //? Updates state when an option is clicked
                onChange={(e) => {
                  const { target } = e;
                  if (target) {
                    const changedValue = (target as HTMLInputElement).value;
                    onChangeFunction(changedValue);
                  }
                }}
              >
              </input>
              {radio}
            </label>
          </>
        ))}
      </div>
    </div>
  );
}
