//? Define properties required by this component
interface ExpensesChartMonthBarProperties {
  label: string;
  cost: number;
  maxCost: number;
}

//? Creates a single colored bar with a given month in the year displayed
export default function ExpensesChartMonthBar(
  { label, cost, maxCost }: ExpensesChartMonthBarProperties,
) {
  //? Using the month's expenses and the year's expenses,
  //? calculate how much this given month expenses were
  //? in comparison to the whole year
  const percentageOfYearExpenses = maxCost === 0
    ? "0%" // If the whole month has no expenses, set the percentage to 0%
    : Math.round((cost / maxCost) * 100).toString() +
      "%";

  //? Render the expense bar for the given month
  return (
    <div
      class="month-expenses"
      title={`Spent in ${label}: $${cost.toLocaleString()} (${percentageOfYearExpenses} of $${maxCost.toLocaleString()})`}
    >
      {/* Content bar */}
      <div class="month-expenses__bar-container">
        {/* Bar fill */}
        <div
          class="month-expenses__bar-fill"
          //? Limit the fill height according to this month's expenses
          //? percent relative to the year
          style={{
            height: percentageOfYearExpenses,
          }}
        >
        </div>
      </div>
      <div class="month-expenses__label">
        {label} {percentageOfYearExpenses}
      </div>
    </div>
  );
}
