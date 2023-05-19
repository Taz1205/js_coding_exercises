import {
  printColours,
  shoppingList,
  highestNumber,
  splitThatString,
  addressLookUp,
} from "../challenges/exercise008-optional";

describe("colours", () => {
  test("returns false if invalid input", () => {
    const colors2 = "";
    const colours1 = 123;
    const colours = [];
    const colors = ["", "", ""];
    expect(printColours(colors2)).toBe(false);
    expect(printColours(colours1)).toBe(false);
    expect(printColours(colours)).toBe(false);
    expect(printColours(colors)).toBe(false);
  });
  test("returns false if invalid colours", () => {
    const colours = ["banana", "orang", "grape", "lemon"];
    expect(printColours(colours)).toBe(false);
    const colours1 = ["blanco", "maron", "blu", "mauve"];
    expect(printColours(colours1)).toBe(false);
  });
  test("returns a list of valid colours", () => {
    const colours = ["red", "orange", "green"];
    expect(printColours(colours)).toEqual(colours);
    const colours1 = ["beige", "cyan", "tan", "azure", "violet"];
    expect(printColours(colours1)).toEqual(colours1);
  });
});

describe("shoppingList", () => {
  test("returns false if invalid input", () => {
    const list = "";
    const newItem = "";
    const list1 = 456;
    const newItem1 = 123;
    const list2 = [456, 1, 2];
    const newItem2 = ["grapes", "loaf of bread"];
    expect(shoppingList(list, newItem)).toBe(false);
    expect(shoppingList(list1, newItem1)).toBe(false);
    expect(shoppingList(list2, newItem2)).toBe(false);
  });
  test("returns a list with an extra item", () => {
    const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
    const newItem = ["earl grey tea"];
    expect(shoppingList(list, newItem)).toEqual([
      "one apple",
      "two dozen organic eggs",
      "cucumber",
      "bread",
      "earl grey tea",
    ]);
  });

  test("returns an empty list with new items added to it", () => {
    const list = [];
    const newItem = ["jelly", "melon", "pear"];
    expect(shoppingList(list, newItem)).toEqual(["jelly", "melon", "pear"]);
  });
  test("returns an empty list with 0 items added to it", () => {
    const list = [];
    const newItem = [];
    expect(shoppingList(list, newItem)).toEqual([]);
  });
});

describe("highestNumber", () => {
  test("returns false if invalid input", () => {
    const num = "";
    const num1 = 123;
    const num2 = [];
    const num3 = ["", "", ""];
    const num4 = ["1", "1", "1"];
    expect(highestNumber(num)).toBe(false);
    expect(highestNumber(num1)).toBe(false);
    expect(highestNumber(num2)).toBe(false);
    expect(highestNumber(num3)).toBe(false);
    expect(highestNumber(num4)).toBe(false);
  });
  test("returns the highest number including negative numbers", () => {
    const numbers = [12, 20, 18];
    const numbers1 = [1, 1, 1];
    const numbers2 = [0, 0, 0];
    const numbers3 = [-19, -3, -200];
    expect(highestNumber(numbers)).toEqual(20);
    expect(highestNumber(numbers1)).toEqual(1);
    expect(highestNumber(numbers2)).toEqual(0);
    expect(highestNumber(numbers3)).toEqual(-3);
  });
});

describe("splitThatString", () => {
  test("returns [] if not a string input", () => {
    const string = 123;
    expect(splitThatString(string)).toEqual([]);
  });
  test("returns [] if empty string input", () => {
    const string = "";
    expect(splitThatString(string)).toEqual([]);
  });
  test("returns a string split up words", () => {
    const string = "USA";
    expect(splitThatString(string)).toEqual(["U", "S", "A"]);
  });
  test("returns a string split up for numbers", () => {
    const string = "123";
    expect(splitThatString(string)).toEqual(["1", "2", "3"]);
  });
  test("returns a string split up for special characters", () => {
    const string = "%&*$£";
    expect(splitThatString(string)).toEqual(["%", "&", "*", "$", "£"]);
  });
});

// Optional Chaining

describe("addressLookUp", () => {
  test("returns undefined if invalid input", () => {
    const user = {};
    const user1 = 1234;
    const user2 = [];
    const user3 = "abcd";
    expect(addressLookUp(user)).toEqual(undefined);
    expect(addressLookUp(user1)).toEqual(undefined);
    expect(addressLookUp(user2)).toEqual(undefined);
    expect(addressLookUp(user3)).toEqual(undefined);
  });
  test("returns a users postcode", () => {
    const user = {
      name: "JimBob Eggs",
      telephone: 666,
      likes: "cheese",
      dislikes: "dirty socks",
      address: {
        houseNumber: "The Number of the Beast",
        postcode: "H12 333",
      },
    };
    const user1 = {
      name: "Chris Hemsworth",
      telephone: 0,
      likes: "Netflix",
      dislikes: "screaming",
      address: {
        houseNumber: 23,
        postcode: 123456,
      },
    };
    expect(addressLookUp(user1)).toEqual(123456);
  });
  test("returns undefined if address & postcode are empty string", () => {
    const user4 = {
      name: "",
      telephone: "",
      likes: "",
      dislikes: "",
      address: {
        houseNumber: "",
        postcode: "",
      },
    };
    expect(addressLookUp(user4)).toEqual(undefined);
  });
  test("returns undefined if address isn't provided", () => {
    const user = {
      name: "JimBob Eggs",
      telephone: 666,
      likes: "cheese",
      dislikes: "dirty socks",
    };
    expect(addressLookUp(user)).toEqual(undefined);
  });
  test("returns undefined if address provided but no postcode", () => {
    const user = {
      name: "John Doe",
      telephone: 12345678,
      likes: "chocolate",
      dislikes: "sleep",
      address: {
        houseNumber: "666",
      },
    };
    expect(addressLookUp(user)).toEqual(undefined);
  });
});
