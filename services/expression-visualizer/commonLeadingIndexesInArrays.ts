//? Parses two arrays and returns an array with the indexes that are equal between then, starting from the first index in both and stopping when the first unmatching index is found
export function commonLeadingIndexesInArrays<T>(
  firstArray: Array<T>,
  secondArray: Array<T>,
): Array<T> {
  const commonLeadingArray: Array<T> = [];
  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] !== secondArray[index]) {
      break;
    }
    commonLeadingArray.push(firstArray[index]);
  }
  return commonLeadingArray;
}
