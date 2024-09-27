//? Handlers to manage HTTP requests
import { Handlers } from "$fresh/server.ts";
//? Type checking
import { DifficultyOptionsType } from "../../types/component-properties/tools/think-binary-search/DifficultyOptions.ts";

//? Export a middleware responsible for handling incoming GET requests
export const thinkBinarySearchMiddleware: Handlers = {
  //? If the user is trying to load the page, pull the parameters and display it
  GET(req, ctx) {
    //? Pull the difficulty level from the URL parameters
    let difficulty = Number(new URL(req.url).searchParams.get("difficulty"));

    const difficultyOptions: DifficultyOptionsType = {
      arraySize: 31,
      arrayOrder: "ordered",
      arrayAssists: "both",
    };

    if (!isNaN(difficulty)) {
      //! [1, 2, 4, 8, 16, 32, 64, 128, 256]
      if (difficulty >= 256) {
        difficultyOptions.arrayAssists = "none";
        difficulty -= 256;
      } else if (difficulty >= 128) {
        difficultyOptions.arrayAssists = "single";
        difficulty -= 128;
      }

      if (difficulty >= 32) {
        difficultyOptions.arrayOrder = "random";
        difficulty -= 32;
      } else if (difficulty >= 16) {
        difficultyOptions.arrayOrder = "uneven";
        difficulty -= 16;
      }

      if (difficulty >= 4) {
        difficultyOptions.arraySize = 127;
        difficulty -= 4;
      } else if (difficulty >= 2) {
        difficultyOptions.arraySize = 63;
        difficulty -= 2;
      }
    }

    //? Pass the difficulty options to the route
    return ctx.render({ ...difficultyOptions });
  },
};
