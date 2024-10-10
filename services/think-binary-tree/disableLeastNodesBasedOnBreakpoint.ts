//? Types
import type { NumbersWithStatus } from "../../types/component-properties/tools/think-binary-search/NumberWithStatus.ts";

/**
 * Given an array of type `Array<NumberWithStatus>`, filter all disabled nodes and return the array.
 * @param array Array to be filtered.
 * @returns The filtered array without disabled nodes.
 */
function filterDisabledIndices(
  array: Array<NumbersWithStatus>,
): Array<NumbersWithStatus> {
  const arrayWithoutDisabledNodes: Array<NumbersWithStatus> = array.filter((
    item: NumbersWithStatus,
  ) => item.disabled === false);
  return arrayWithoutDisabledNodes;
}

/**
 * Returns if the position is in the first or second half of an array.
 * @param position Which index in the array the number is located.
 * @param arraySize How many indices the array has.
 * @returns a string that indicates in which half the number is located.
 */
function isSearchNumberIsGreaterOrLowerThanMidwayPoint(
  position: number,
  arraySize: number,
) {
  if (position >= arraySize / 2) {
    return "greater";
  } else {
    return "lower";
  }
}

/**
 * Given an `Array<NumberWithStatus>` and a `searchNumber`, scan the array and return if there are more indices lower than or greater than the `searchNumber`.
 * @param searchNumber The `number` to be used to search the array for the midway point.
 * @param arrayWithNumberAndDisabledProperties An `Array<NumberWithStatus>` to be searched through.
 * @returns "lower" or "greater", indicating if there are more indices lower than or greater than the `searchNumber`.
 */
function findIfThereAreMoreIndicesGreaterOrLowerThanSearchNumber(
  searchNumber: number,
  arrayWithNumberAndDisabledProperties: Array<NumbersWithStatus>,
): "lower" | "greater" {
  const numbersOnlyArray: Array<number> = arrayWithNumberAndDisabledProperties
    .map((item) => item.number);

  const arraySize = numbersOnlyArray.length;

  let indicesLowerThanSearchNumber = 0;
  for (let i = 0; i < arraySize; i++) {
    if (searchNumber < numbersOnlyArray[i]) {
      break;
    }
    indicesLowerThanSearchNumber++;
  }

  return isSearchNumberIsGreaterOrLowerThanMidwayPoint(
    indicesLowerThanSearchNumber,
    arraySize,
  );
}

/**
 * Given the correct parameters, disable as few indices as possible and then returns the final `Array<NumberWithStatus>`.
 * @param greaterOrLower Wether if the indices lower than or greater than the `searchNumber` should be disabled.
 * @param searchNumber The dividing `number` that defines which indices will be disabled.
 * @param arrayToDisable The `Array<NumberWithStatus>` that will have indices being disabled.
 * @returns An updated `Array<NumberWithStatus>` with indices disabled based on `greaterOrLower` and `searchNumber`.
 */
function disableNodesGreaterThanOrLowerThanSearchNumber(
  greaterOrLower: "greater" | "lower",
  searchNumber: number,
  arrayToDisable: Array<NumbersWithStatus>,
): [Array<NumbersWithStatus>, "greater" | "lower"] {
  const updatedArrayToDisable = [...arrayToDisable];

  if (greaterOrLower === "lower") {
    for (let i = 0; i < updatedArrayToDisable.length; i++) {
      if (searchNumber < updatedArrayToDisable[i].number) {
        break;
      }
      updatedArrayToDisable[i].disabled = true;
    }
  } else {
    for (let i = updatedArrayToDisable.length - 1; i >= 0; i--) {
      if (searchNumber > updatedArrayToDisable[i].number) {
        break;
      }
      updatedArrayToDisable[i].disabled = true;
    }
  }
  return [updatedArrayToDisable, greaterOrLower];
}

/**
 * Given an `arrayOfUniqueNumbers` of type `Array<NumberWithStatus>` and a `breakpoint`, filter all the disabled indices and then uses the `breakpoint` value to disable as few indices as possible, then returning the updated array.
 * @param searchNumber A `number` that defines where the array should be split, always favoring the portion with more remaining indices.
 * @param arrayOfUniqueNumbers An `Array<NumberWithStatus>` of elements that will be split on the breakpoint number.
 * @returns An `Array<NumberWithStatus>` that with as few indices as possible
 */
export function disableLeastNodesBasedOnBreakpoint(
  searchNumber: number,
  arrayOfUniqueNumbers: Array<NumbersWithStatus>,
): [Array<NumbersWithStatus>, "lower" | "greater"] {
  const filteredArrayWithoutDisabledNumbers: Array<NumbersWithStatus> =
    filterDisabledIndices(arrayOfUniqueNumbers);

  let midwayPointCounter: number = 0;
  for (let i = 0; i < filteredArrayWithoutDisabledNumbers.length; i++) {
    if (searchNumber > filteredArrayWithoutDisabledNumbers[i].number) {
      midwayPointCounter++;
    }
  }

  const leastIndicesGreaterOrLowerThanSearchNumber =
    findIfThereAreMoreIndicesGreaterOrLowerThanSearchNumber(
      searchNumber,
      arrayOfUniqueNumbers,
    );

  return disableNodesGreaterThanOrLowerThanSearchNumber(
    leastIndicesGreaterOrLowerThanSearchNumber,
    searchNumber,
    arrayOfUniqueNumbers,
  );
}
