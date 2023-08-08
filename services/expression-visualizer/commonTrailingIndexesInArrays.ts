//? Parses two arrays and returns an array with the indexes that are equal between then, starting from the last index in both and stopping when the first unmatching index is found
export function commonTrailingIndexesInArrays<T>(
  firstArray: Array<T>,
  secondArray: Array<T>,
): Array<T> {
  const commonTrailingArray: Array<T> = [];
  const firstArrayLength = firstArray.length;
  const secondArrayLength = secondArray.length;
  for (let index = 0; index < firstArrayLength; index++) {
    if (
      firstArray[firstArrayLength - index - 1] !==
        secondArray[secondArrayLength - index - 1]
    ) {
      break;
    }
    commonTrailingArray.unshift(firstArray[firstArrayLength - index - 1]);
  }
  return commonTrailingArray;
}
