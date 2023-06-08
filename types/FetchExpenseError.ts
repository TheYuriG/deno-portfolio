//? Creates an instance of Error to be returned when fetchExpenses() fails
export default class FetchExpenseError extends Error {
  constructor(public message: string, public trace: Error["stack"]) {
    //? Pass the Error message
    super(message);
    //? Names this error
    this.name = "FetchExpenseError";
    //? Attaches original stack trace
    this.stack = trace;
  }
}
