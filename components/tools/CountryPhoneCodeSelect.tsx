import { countryPhoneCodes } from "../../types/CountryPhoneCodes.ts";

export function CountryPhoneCodeSelect(
  { countryCode, updateCountryCode }: {
    countryCode: string;
    updateCountryCode: (newCountryCode: string) => void;
  },
) {
  return (
    <div class="flex flex-col sm:flex-row w-full grow items-center">
      {/* Label for what this is for */}
      <label
        class="flex w-max whitespace-nowrap"
        htmlFor="country-codes"
      >
        Country
      </label>
      {/* Select dropdown */}
      <select
        class="relative bg-transparent custom-bo-ac w-full rounded-lg p-2 my-2 sm:my-1 sm:ml-2 cursor-pointer custom-tr-tx-bg-bo"
        name="country-codes" //? Link to label
        value={countryCode} //? Tracks current value
        //? Updates state when an option is selected
        onChange={(e) => {
          const { target } = e;
          if (target) {
            const changedValue = (target as HTMLSelectElement).value;
            updateCountryCode(changedValue);
          }
        }}
      >
        {/* Programatically creates country options from array of objects provided */}
        {countryPhoneCodes.map((
          { countryInitial, countryCodeDigit, countryNameAndCode },
        ) => (
          <option
            class="custom-bg-bc"
            data-countryCode={countryInitial}
            value={countryCodeDigit}
          >
            {countryNameAndCode}
          </option>
        ))}
      </select>
    </div>
  );
}
