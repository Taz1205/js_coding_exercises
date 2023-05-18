import {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
} from "../challenges/exercise005";

describe("findNextNumber", () => {
  test("returns the next number after the given number in the array", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
  test("If no input, returns null", () => {
    expect(findNextNumber([], 0)).toBe(null);
  });
});

describe("count1sand0s", () => {
  test("If no input, returns null", () => {
    expect(count1sand0s("")).toBe(null);
  });
  test("If invalid string, returns null", () => {
    expect(count1sand0s("23456")).toBe(null);
  });
  test("If input is not a string, returns null", () => {
    expect(count1sand0s(12345)).toBe(null);
  });
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(count1sand0s("11000")).toEqual({
      1 : 2,
      0 : 3,
    });

    expect(count1sand0s("0101010111")).toEqual({
      1 : 6,
      0 : 4,
    });

    expect(count1sand0s("1111111")).toEqual({
      1 : 7,
      0 : 0,
    });

    expect(count1sand0s("0111")).toEqual({
      1 : 3,
      0 : 1,
    });
  });
});

describe("reverseNumber", () => {
  test("If no input, returns null", () => {
    expect(reverseNumber()).toBe(null);
  });
  test("If number is not an integer, returns null", () => {
    expect(reverseNumber(12.34)).toBe(null);
  });
  test("If input is not a number, returns null", () => {
    expect(reverseNumber("34")).toBe(null);
  });
  test("reverses the digits of a positive or negative integer", () => {
    expect(reverseNumber(0)).toBe(0);
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
    expect(reverseNumber(-1000)).toBe(-1);
  });
});

describe("sumArrays", () => {
  test("If no input, returns null", () => {
    const arrs = [];
    expect(sumArrays(arrs)).toBe(null);
  });
  test("If arrs not an array, returns null", () => {
    const arrs = "2";
    expect(sumArrays(arrs)).toBe(null);
  });
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(sumArrays(arrs)).toBe(44);
  });
  test("returns the total of all sub arrays even with all zeroes", () => {
    const arrs = [[0], [0], [0]];
    expect(sumArrays(arrs)).toBe(0);
  });
});

describe("arrShift", () => {
  test("returns it as it is if not an array", () => {
    expect(arrShift("2")).toEqual("2");
  });
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
    expect(arrShift([0])).toEqual([0]);
  });
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
  test("returns false if empty string", () => {
    const obj1 = {};

    expect(findNeedle(obj1, "")).toBe(false);
    expect(findNeedle(obj1, "hello")).toBe(false);
  });
  test("returns false if invalid input", () => {
    const obj1 = 2;

    expect(findNeedle(obj1, "")).toBe(false);
    expect(findNeedle(obj1, "hello")).toBe(false);
  });
});

describe("getWordFrequencies", () => {
  test("returns false if empty string", () => {
    expect(getWordFrequencies("")).toBe(false);
  });
  test("returns false if invalid string", () => {
    expect(getWordFrequencies(123)).toBe(false);
  });
  test("returns the frequencies of each word in a string", () => {
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1,
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1,
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3,
    });
  });

  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3,
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1,
    });
  });
});
