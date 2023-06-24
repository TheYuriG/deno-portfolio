//? Define properties required by this component
interface ExpensesChartMonthBarProperties {
  label: string;
  cost: number;
  maxCost: number;
}

//? Creates a single colored bar with a given month in the year displayed
export function ExpensesChartMonthBar(
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
      class="flex flex-col items-center p-2 w-1/6 md:w-1/12"
      //   class="month-expenses"
      title={`Spent in ${label}: $${cost.toLocaleString()} (${percentageOfYearExpenses} of $${maxCost.toLocaleString()})`}
    >
      {/* Content bar */}
      <div class="h-40 w-8 mb-2 flex flex-col place-content-end custom-bo-ac rounded-2xl overflow-hidden">
        {/* Bar fill */}
        <div
          class="w-full custom-bg-nc"
          //? Limit the fill height according to this month's expenses
          //? percent relative to the year
          style={{
            height: percentageOfYearExpenses,
          }}
        >
        </div>
      </div>
      <div class="text-center w-min">
        {label} {percentageOfYearExpenses}
      </div>
    </div>
  );
}
