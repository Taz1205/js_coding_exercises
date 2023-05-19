import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("it throws an error if array not passed", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
    expect(() => {
      sumMultiples(5);
    }).toThrow("A valid input is required");
    expect(() => {
      sumMultiples([]);
    }).toThrow("A valid input is required");
  });
  test("checks if n is divisible by 3 or 5, returns their sum", () => {
    expect(sumMultiples([3, 5, 5, 0, 0, 1])).toEqual(13);
  });
  test("checks decimal numbers work too", () => {
    expect(sumMultiples([30, 5, 5.0, 0.0, 0, 1])).toEqual(40);
  });
  test("returns 0 if not divisible by either 3 or 5", () => {
    expect(sumMultiples([32, 56, 0, 0, 1])).toEqual(0);
  });
});

describe("isValidDNA", () => {
  test("it throws an error if string not passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  test("it returns false if invalid input", () => {
    expect(isValidDNA("")).toBe(false);
    expect(isValidDNA(1234)).toBe(false);
  });
  test("it returns false if any other character other than A G C and T", () => {
    expect(isValidDNA("CGAG&$")).toBe(false);
    expect(isValidDNA("CGYCT")).toBe(false);
    expect(isValidDNA("CAG TT")).toBe(false);
  });
  test("it returns true if only contains character A G C and T", () => {
    expect(isValidDNA("CGAGCCTT")).toBe(true);
    expect(isValidDNA("agct")).toBe(true);
    expect(isValidDNA("AGCTTagCT")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if string not passed", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });
  test("it returns false if invalid input", () => {
    expect(getComplementaryDNA(1234)).toBe(false);
  });
  test("it returns the complementary pair of A G C and T for valid DNA", () => {
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
    expect(getComplementaryDNA("GGCCT")).toEqual("CCGGA");
  });
  test("it returns empty string if not valid DNA", () => {
    expect(getComplementaryDNA("XYZ")).toEqual("");
    expect(getComplementaryDNA("agct")).toEqual("");
    expect(getComplementaryDNA("mnOP Q")).toEqual("");
    expect(getComplementaryDNA("")).toEqual("");
    expect(getComplementaryDNA("1234")).toEqual("");
  });
});

describe("isItPrime", () => {
  test("it returns false if invalid input", () => {
    expect(isItPrime("a")).toBe(false);
    expect(isItPrime()).toBe(false);
  });
  test("it returns false if not a prime number 0,1,4,6...", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(8)).toBe(false);
  });
  test("it returns true if a prime number 2,3,5,7,11,13...", () => {
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });
});
describe("createMatrix", () => {
  test("it returns false if any invalid inputs passed", () => {
    const a = "";
    expect(createMatrix(a, "foo")).toBe(false);
    expect(createMatrix("", "foo")).toBe(false);
    expect(createMatrix(1, "")).toBe(false);
    expect(createMatrix(0, "")).toBe(false);
  });
  test("it returns an empty matrix when passed 0", () => {
    expect(createMatrix(0, "foo")).toEqual([]);
  });
  test("it returns a matrix 1 * 1 when passed 1", () => {
    expect(createMatrix(1, "foo")).toEqual([["foo"]]);
  });
  test("it returns a matrix 2 * 2 when passed 2", () => {
    expect(createMatrix(2, "foo")).toEqual([
      ["foo", "foo"],
      ["foo", "foo"],
    ]);
  });
  test("it returns a matrix 3 * 3 when passed 3", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("it returns false if any invalid inputs passed", () => {
    expect(areWeCovered(1234, "Monday")).toBe(false);
    expect(areWeCovered("1234", "Monday")).toBe(false);
    expect(
      areWeCovered([{ name: "Hannah", rota: ["Friday", "Sunday"] }], 1)
    ).toBe(false);
  });
  test("it returns false if any empty inputs passed", () => {
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(
      areWeCovered([{ name: "Hannah", rota: ["Friday", "Sunday"] }], "")
    ).toBe(false);
    expect(areWeCovered([], "")).toBe(false);
  });
  test("it returns false if < 3 staff scheduled to work>", () => {
    const staff = [
      { name: "Hannah", rota: ["Friday", "Sunday"] },
      { name: "Sophia", rota: ["Friday", "Sunday"] },
      { name: "Annie", rota: ["Friday", "Sunday"] },
      { name: "Mila", rota: ["Friday", "Sunday"] },
    ];
    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
  });
  test("it returns true if exactly 3 staff scheduled to work>", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday"] },
      { name: "Anna", rota: ["Monday"] },
      { name: "John", rota: ["Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });
  test("it returns true if > 3 staff scheduled to work>", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Anna", rota: ["Tuesday", "Thursday", "Friday"] },
      { name: "John", rota: ["Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
});
