//? Import individual MonthBar components to render all 12 months
import ExpensesChartMonthBar from "./ExpensesChartMonthBar.tsx";
//? Import the Expense type for casting
import type { Expense } from "../../types/Expense.ts";

//? Define properties for this component
interface ExpenseChartProperties {
  year: string;
  expenses: Expense[];
}

//? Exports the year of expenses and the row of individual
//? monthly expenses bar chart
export default function ExpenseChart(
  { year, expenses }: ExpenseChartProperties,
) {
  //? Create an expense object for every month
  const monthExpenses = [
    { label: "Jan", cost: 0 },
    { label: "Feb", cost: 0 },
    { label: "Mar", cost: 0 },
    { label: "Apr", cost: 0 },
    { label: "May", cost: 0 },
    { label: "Jun", cost: 0 },
    { label: "Jul", cost: 0 },
    { label: "Aug", cost: 0 },
    { label: "Sep", cost: 0 },
    { label: "Oct", cost: 0 },
    { label: "Nov", cost: 0 },
    { label: "Dez", cost: 0 },
  ];

  //? Cycle through all expenses received and
  //? assign them to the appropriate months
  for (const expense of expenses) {
    const monthNumber = new Date(expense.date).getMonth();
    monthExpenses[monthNumber].cost += expense.cost;
  }

  //? Calculate how much was spent through the entire year
  const yearTotalCost = monthExpenses.reduce(
    (oldValue, currentValue) => oldValue + currentValue.cost,
    0,
  );

  return (
    <>
      <h2 class="text-3xl my-2 f-as">{year}'s Expenses</h2>
      <div class="w-full flex flex-wrap">
        {monthExpenses.map((monthData) => (
          <ExpensesChartMonthBar
            label={monthData.label}
            cost={monthData.cost}
            maxCost={yearTotalCost}
          />
        ))}
      </div>
    </>
  );
}
