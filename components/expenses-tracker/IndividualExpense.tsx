//? Import the ExpenseDate component that will organize the Data in a column
import { ExpenseDate } from "./ExpenseDate.tsx";

//? Define properties required for this component
interface IndividualExpenseProperties {
  date: Date;
  description: string;
  cost: number;
}

//? Make the individual expense component available to everything else
export function IndividualExpense(
  { date, description, cost }: IndividualExpenseProperties,
) {
  return (
    <>
      {/* The entire Expense */}
      <div class="single-expense">
        {/* Expense Date */}
        <ExpenseDate date={date} />
        {/* Expense Description */}
        <div class="expense-description">{description}</div>
        {/* Expense Price */}
        <div class="expense-cost">${cost.toLocaleString()}</div>
      </div>
    </>
  );
}
