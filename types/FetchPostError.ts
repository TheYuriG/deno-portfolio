//? Creates an instance of Error to be returned when fetchPosts() fails
export default class FetchPostError extends Error {
  constructor(public message: string, public trace: Error["stack"]) {
    //? Pass the Error message
    super(message);
    //? Names this error
    this.name = "FetchPostError";
    //? Attaches original stack trace
    this.stack = trace;
  }
}
