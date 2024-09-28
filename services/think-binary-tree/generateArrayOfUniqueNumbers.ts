//? Type
import type { NumbersWithStatus } from "../../types/component-properties/tools/think-binary-search/NumberWithStatus.ts";

/**
 * Generate an array of unique numbers as large as the `arraySize` provided. All indices will of type `NumberWithStatus`.
 * @param arraySize How many indices this array must contain
 * @returns An `Array<NumberWithStatus` with all disabled statuses set to `false`.
 */
export function generateArrayOfUniqueNumbers(
  arraySize: number,
): Array<NumbersWithStatus> {
  const maxRangeBetweenNumbers = Math.ceil(arraySize / 5);
  const randomizedNumbersArray: Array<NumbersWithStatus> = [];
  function randomNumberWithinRange(max: number) {
    return Math.ceil(Math.random() * max);
  }
  for (
    let current = Math.ceil(arraySize / 10);
    current <= arraySize;
    current++
  ) {
    const generatedNumber = Math.ceil(
      current * maxRangeBetweenNumbers +
        randomNumberWithinRange(maxRangeBetweenNumbers),
    );
    randomizedNumbersArray.push({ number: generatedNumber, disabled: false });
  }
  return randomizedNumbersArray;
}
