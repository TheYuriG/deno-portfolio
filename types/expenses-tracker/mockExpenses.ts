import { Expense } from "../Expense.ts";

//? Mock expenses
export const mockExpenses: Expense[] = [
  {
    date: new Date(2020, 1, 1).getTime(),
    description: "Medical Insurance",
    cost: 3600,
  },
  {
    date: new Date(2020, 5, 3).getTime(),
    description: "Shoes",
    cost: 200,
  },
  {
    date: new Date(2020, 8, 18).getTime(),
    description: "House",
    cost: 250000,
  },
  {
    date: new Date(2020, 9, 20).getTime(),
    description: "Car",
    cost: 40000,
  },
  {
    date: new Date(2020, 11, 28).getTime(),
    description: "Kids",
    cost: 10000,
  },
];
