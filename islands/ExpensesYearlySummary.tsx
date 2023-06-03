//? Import the Expense type for casting
import StyledSelect from "./StyledSelect.tsx";

//? Define component properties
interface YearlyExpensesSummaryProperties {
  expensesFilter: (year: string) => void;
}

//? Exports select button
export default function YearlyExpensesSummary(
  { expensesFilter }: YearlyExpensesSummaryProperties,
) {
  return (
    <div class="year-expenses">
      <StyledSelect
        label="Year"
        name="year-filter"
        optionsArray={["2020", "2021", "2022", "2023"]}
        value={"2020"}
        onChangeFunction={(input) => {
          expensesFilter(input);
        }}
      />
    </div>
  );
}
