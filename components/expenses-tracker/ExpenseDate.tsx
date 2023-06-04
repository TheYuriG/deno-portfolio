//? Define properties required for this component
interface ExpenseDateProperties {
  date: Date;
}

//? Make the expense date component available to everything else
export function ExpenseDate(
  { date }: ExpenseDateProperties,
) {
  //? Converts the date from string to a Date object to be used
  const dateAsDateObject = new Date(date);
  //? Parse the Date into understandable data
  const expenseMonth = dateAsDateObject.toLocaleString("en-US", {
    month: "long",
  });
  const expenseYear = dateAsDateObject.getFullYear();
  const expenseDay = dateAsDateObject.toLocaleString("en-US", {
    day: "2-digit",
  });

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
