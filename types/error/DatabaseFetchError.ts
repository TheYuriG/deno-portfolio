//? Creates an instance of Error to be returned when a database call fails
export default class DatabaseFetchError extends Error {
  constructor(public message: string, public trace: Error["stack"]) {
    //? Pass the Error message
    super(message);
    //? Names this error
    this.name = "DatabaseFetchError";
    //? Attaches original stack trace
    this.stack = trace;
  }
}
