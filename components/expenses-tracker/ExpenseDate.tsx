//? Define properties required for this component
interface ExpenseDateProperties {
  date: Date;
}

//? Make the expense date component available to everything else
export function ExpenseDate(
  { date }: ExpenseDateProperties,
) {
  //? Parse the Date into understandable data
  const expenseMonth = date.toLocaleString("en-US", { month: "long" });
  const expenseYear = date.getFullYear();
  const expenseDay = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div class="expense-date">
      {/* Month, bolded, big font */}
      <div class="expense-date__month">{expenseMonth}</div>
      {/* Day, bolded, bigger font */}
      <div class="expense-date__day">{expenseDay}</div>
      {/* Year, small font */}
      <div class="expense-date__year">{expenseYear}</div>
    </div>
  );
}
