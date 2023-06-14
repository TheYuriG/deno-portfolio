//? Import the Expense type for casting
import StyledSelect from "../components/UI/StyledSelect.tsx";

//? Define component properties
interface ExpensesYearSelectProperties {
  selectedYear: string;
  expensesFilter: (year: string) => void;
}

//? Exports select button
export default function ExpensesYearSelect(
  { expensesFilter, selectedYear }: ExpensesYearSelectProperties,
) {
  return (
    <span class="self-end">
      <StyledSelect
        label="Year"
        name="year-filter"
        optionsArray={["2020", "2021", "2022", "2023"]}
        value={selectedYear}
        onChangeFunction={(input) => {
          expensesFilter(input);
        }}
      />
    </span>
  );
}
