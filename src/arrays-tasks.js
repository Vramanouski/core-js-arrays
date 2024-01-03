function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
function sumArrays(arr1, arr2) {
  const longer = arr1.length > arr2.length ? arr1 : arr2;
  const shorter = arr1.length <= arr2.length ? arr1 : arr2;

  return longer.map((elem, i) => {
    const otherElem = i < shorter.length ? shorter[i] : 0;
    return elem + otherElem;
  });
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.reduce((count, current) => {
    return current === item ? count + 1 : count;
  }, 0);
}

function removeFalsyValues(arr) {
  const result = arr.filter((ar) => ar);
  return result;
}

function getStringsLength(arr) {
  const result = arr.map((el) => el.length);
  return result;
}

function getAverage(arr) {
  let avg =
    arr.length < 1 ? 0 : arr.reduce((accum, init) => accum + init) / arr.length;

  avg = Number.isInteger(avg) ? avg : Number(avg.toFixed(2));

  return avg;
}

function isSameLength(arr) {
  const [{ length }] = arr;
  return arr.every((el) => el.length === length);
}

function isValueEqualsIndex(arr) {
  return arr.some((el, i) => el === i);
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  if (n < 1) {
    return [];
  }

  return arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  if (n === 1) {
    return new Array(size).fill(0);
  }

  return new Array(size)
    .fill(0)
    .map(() => createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce(
    (balance, [income, expense]) => balance + (income - expense),
    0
  );
}

function createChunks(arr, chunkSize) {
  if (!Array.isArray(arr) || chunkSize <= 0) {
    return [];
  }

  const numChunks = Math.ceil(arr.length / chunkSize);
  return Array.from({ length: numChunks }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((subArray, index) => {
    if (subArray !== undefined && subArray[index] !== undefined) {
      return subArray[index];
    }
    return undefined;
  }, arr);
}

function getFalsyValuesCount(arr) {
  return arr.reduce((acc, current) => {
    return !current ? acc + 1 : acc;
  }, 0);
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => (i === j ? 1 : 0))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce((acc, current, i) => {
    if (current % 2 !== 0) {
      acc.push(i);
    }
    return acc;
  }, []);
}

function getHexRGBValues(arr) {
  return arr.map((num) => {
    const numTesting = Math.abs(num) % 16777216;

    const hex = numTesting.toString(16).padStart(6, '0').toUpperCase();

    return `#${hex}`;
  });
}

function getMaxItems(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) =>
    Array.from({ length: index + 1 }, () => item)
  );
}

function sortDigitNamesByNumericOrder(arr) {
  const digits = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

  return arr
    .map((name) => ({ name, value: digits[name] }))
    .sort((a, b) => a.value - b.value)
    .map((object) => object.name);
}

function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2);
  const hasMiddle = arr.length % 2 !== 0;

  const head = arr.slice(0, mid);
  const tail = arr.slice(hasMiddle ? mid + 1 : mid);
  const middle = hasMiddle ? [arr[mid]] : [];

  return tail.concat(middle).concat(head);
}

function findLongestIncreasingSubsequence(
  nums,
  index = 0,
  prev = -Infinity,
  currentLength = 0,
  mL = 1
) {
  let maxLength = mL;
  if (index >= nums.length) return maxLength;

  let newLength = currentLength;
  if (nums[index] > prev) {
    newLength += 1;
    maxLength = Math.max(maxLength, newLength);
  } else {
    newLength = 1;
  }

  return findLongestIncreasingSubsequence(
    nums,
    index + 1,
    nums[index],
    newLength,
    maxLength
  );
}

function shiftArray(arr, n) {
  let answer = [];

  if (n > 0) {
    answer = [...arr.slice(-n), ...arr.slice(0, -n)];
  }

  if (n < 0) {
    answer = [...arr.slice(Math.abs(n)), ...arr.slice(0, Math.abs(n))];
  }
  return answer;
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
