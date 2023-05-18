export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  else if (
    !Array.isArray(nums) ||
    typeof n !== "number" ||
    nums.length === 0 ||
    n.length === 0
  )
    return null;
  const index = nums.indexOf(n);
  if (index === -1 || index === nums.length - 1) return null;
  return nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) return null;
  else if (typeof str !== "string" || str.length === 0) return null;
  let count1s = 0;
  let count0s = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") count1s++;
    else if (str[i] === "0") count0s++;
    else return null;
  }
  return { 0: count0s, 1: count1s } ;
};

export const reverseNumber = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n.length === 0)
    return null;
  let reversed = 0;
  let isNegative = false;

  if (n < 0) {
    isNegative = true;
    n = Math.abs(n);
  }

  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  if (isNegative) {
    reversed *= -1;
  }
  return reversed;
};

export const sumArrays = (arrs) => {
  if (!Array.isArray(arrs) || arrs.length === 0) return null;

  let total = 0;

  arrs.forEach((subArray) => {
    if (Array.isArray(subArray) && subArray.length !== 0) {
      subArray.forEach((num) => {
        if (typeof num === "number") total += num;
        else return null;
      });
    } else return null;
  });

  return total;
};

export const arrShift = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }

  const first = arr[0];
  const last = arr[arr.length - 1];

  arr[0] = last;
  arr[arr.length - 1] = first;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (typeof haystack !== "object" || haystack === null || searchTerm === null)
    return false;

  const regex = new RegExp(searchTerm, "i"); // Create a case-insensitive regular expression

  for (const key in haystack) {
    if (haystack.length !== 0 && typeof haystack[key] === "string") {
      if (regex.test(haystack[key])) {
        return true;
      }
    }
  }

  return false;
};

export const getWordFrequencies = (str) => {
  if (str.length === 0 || typeof str !== "string") return false;
  const noPuncStr = str.replace(/[^\w\s]/g, ""); // Remove punctuation
  const lowercaseStr = noPuncStr.toLowerCase(); // Convert to lowercase
  const words = lowercaseStr.split(/\s+/); // Split into an array of words

  const frequencies = {};

  for (const word of words) {
    if (word in frequencies) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }

  return frequencies;
};
