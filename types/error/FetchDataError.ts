//? Creates an instance of Error to be returned when an attempt to save/read data from KV fails
export default class FetchDataError extends Error {
  constructor(public message: string, public trace: Error["stack"]) {
    //? Pass the Error message
    super(message);
    //? Attaches original stack trace
    this.stack = trace;
  }
}
