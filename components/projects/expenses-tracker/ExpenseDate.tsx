//? Define properties required for this component
interface ExpenseDateProperties {
  date: number;
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
    <div class="flex flex-col items-center min-w-[7.5em] py-1 px-2 sm:mr-2 custom-bo-nc rounded-lg">
      {/* Month, bolded, big font */}
      <div class="font-bold text-lg">{expenseMonth}</div>
      {/* Day, bolded, bigger font */}
      <div class="font-bold text-2xl">{expenseDay}</div>
      {/* Year, small font */}
      <div class="text-md">{expenseYear}</div>
    </div>
  );
}
