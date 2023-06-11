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
      <div class="bo-nc rounded-xl sh-nc flex flex-col sm:flex-row sm:w-full my-2 p-2 items-center text-center sm:text-left">
        {/* Expense Date */}
        <ExpenseDate date={date} />
        {/* Expense Description */}
        <div class="sm:w-full sm:mr-2 justify-self-center text-xl">
          {description}
        </div>
        {/* Expense Price */}
        <div class="text-2xl py-0.5 px-2 tc-nc bg-ac bo-nc rounded-lg trs">
          ${cost.toLocaleString()}
        </div>
      </div>
    </>
  );
}
