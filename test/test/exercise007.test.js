import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("if no number is inputted, returns 0", () => {
    expect(sumDigits()).toEqual(0);
  });
  test("if invalid input, returns 0", () => {
    expect(sumDigits("abc")).toEqual(0);
  });
  test("returns the sum of all digits", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(0)).toEqual(0);
    expect(sumDigits(900)).toEqual(9);
    expect(sumDigits(100100100)).toEqual(3);
    expect(sumDigits(123456789)).toEqual(45);
  });
});

describe("createRange", () => {
  test("if no number is inputted, returns 0", () => {
    expect(createRange()).toEqual(0);
  });
  test("if invalid input, returns 0", () => {
    expect(createRange("", "", "")).toEqual(0);
    expect(createRange(0, 0, 0)).toEqual(0);
  });
  test("returns an increasing range of numbers in an array", () => {
    expect(createRange(1, 11, 2)).toEqual([1, 3, 5, 7, 9, 11]);
    expect(createRange(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
  });
  test("returns a descreasing range of numbers in an array", () => {
    expect(createRange(10, 7, 1)).toEqual([10, 9, 8, 7]);
    expect(createRange(8, 0, 2)).toEqual([8, 6, 4, 2, 0]);
  });
  test("returns a range of consecutive numbers in an array when no step provided", () => {
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getScreentimeAlertList", () => {
  test("if no user info or no date, returns an error message", () => {
    expect(getScreentimeAlertList([], "")).toEqual(
      "Invalid input or missing value"
    );
    expect(getScreentimeAlertList("beth, Sam", 19001209)).toEqual(
      "Invalid input or missing value"
    );
    expect(getScreentimeAlertList([], "2023-05-19")).toEqual(
      "Invalid input or missing value"
    );
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "", usage: {} }],
          },
        ],
        19001209
      )
    ).toEqual("Invalid input or missing value");
  });
  test("returns [] if no screenTime usage < 0", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "2023-12-12", usage: -30 }],
          },
        ],
        "2023-05-21"
      )
    ).toEqual([]);
  });
  test("returns [] if no screenTime value nor date nor usage", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "2023-12-12", usage: [] }],
          },
        ],
        "2023-05-21"
      )
    ).toEqual([]);
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "2023-09-01", usage: {} }],
          },
        ],
        "2023-05-21"
      )
    ).toEqual([]);
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "2023-09-01", usage: "" }],
          },
        ],
        "2023-05-21"
      )
    ).toEqual([]);
  });
  test("if date is not in YYYY-MM-DD format, returns an error message", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "fatty",
            name: "fatty",
            screenTime: [{ date: "", usage: {} }],
          },
        ],
        "19-05-2023"
      )
    ).toEqual("date has to be in this format: YYYY-MM-DD");
  });
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    const users1 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2023-05-20",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2023-05-20",
            usage: { mapMyRun: 10, whatsApp: 10, facebook: 10, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "Taz1205",
        name: "Tazeen Ahmed",
        screenTime: [
          {
            date: "2023-05-16",
            usage: { Instagram: 30, whatsApp: 30, facebook: 30, safari: 100 },
          },
          {
            date: "2023-05-17",
            usage: { Instagram: 0, whatsApp: 0, facebook: 0, safari: 160 },
          },
          {
            date: "2023-05-18",
            usage: { Instagram: 10, whatsApp: 20, facebook: 10, safari: 310 },
          },
          {
            date: "2023-05-20",
            usage: { Instagram: 10, whatsApp: 20, facebook: 12, safari: 240 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users1, "2023-05-20")).toEqual([
      "beth_1234",
      "Taz1205",
    ]);
  });
  test("return an empty array when users have used <= 100 minutes of screentime for a given date.", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 30 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 30 },
          },
          {
            date: "2023-05-19",
            usage: { twitter: 12, instagram: 15, facebook: 30 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 10 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2023-05-19",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0 },
          },
        ],
      },
      {
        username: "Taz1205",
        name: "Tazeen Ahmed",
        screenTime: [
          {
            date: "2023-05-19",
            usage: { Instagram: 30, whatsApp: 30, facebook: 30, safari: 10 },
          },
          {
            date: "2023-05-17",
            usage: { Instagram: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2023-05-18",
            usage: { Instagram: 10, whatsApp: 20, facebook: 10, safari: 31 },
          },
          {
            date: "2023-05-22",
            usage: { Instagram: 10, whatsApp: 20, facebook: 12, safari: 24 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2023-05-19")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("if no number is inputted, returns an error message", () => {
    expect(hexToRGB()).toEqual("hexadecimal string is required");
    expect(hexToRGB("")).toEqual("hexadecimal string is required");
  });
  test("if invalid input, returns an error message", () => {
    expect(hexToRGB([])).toEqual("hexadecimal string is required");
    expect(hexToRGB({})).toEqual("hexadecimal string is required");
    expect(hexToRGB(123456)).toEqual("hexadecimal string is required");
  });
  test("if invalid hexadecimal string, returns an error message", () => {
    expect(hexToRGB("YY1234")).toEqual("Invalid hexadecimal color code");
  });
  test("returns RGB code when a valid hex code is given ", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    expect(hexToRGB("FFFFFF")).toEqual("rgb(255,255,255)");
    expect(hexToRGB("000000")).toEqual("rgb(0,0,0)");
    expect(hexToRGB("#008000")).toEqual("rgb(0,128,0)");
    expect(hexToRGB("#B22222")).toEqual("rgb(178,34,34)");
  });
});

describe("findWinner", () => {
  test("if board is missing or invalid, returns an error message", () => {
    expect(findWinner()).toEqual("invalid or empty board");
    expect(findWinner([])).toEqual("invalid or empty board");
    expect(findWinner(123)).toEqual("invalid or empty board");
    expect(findWinner("X0null")).toEqual("invalid or empty board");
  });
  test("if board array not of length 3, returns an error message", () => {
    expect(
      findWinner([
        [null, null, null],
        ["0", "0", "0"],
        ["0", "0", "0"],
        ["X", "X", "X"],
      ])
    ).toEqual("board has to be an array of length 3");
  });
  test("if each array in the board not of length 3, returns an error message", () => {
    expect(
      findWinner([
        ["0", "0"],
        ["0", "0", "0", null],
        ["X", "X", "X"],
      ])
    ).toEqual("each row of the board has to be an array of length 3");
  });
  test("if each cell in the board not X or 0 or null, returns an error message", () => {
    expect(
      findWinner([
        ["0", "0", 0],
        ["0", null, "null"],
        ["X", "X", "X"],
      ])
    ).toEqual("each cell of the board has to be either X or 0 or null");
  });
  test("returns winner X or 0", () => {
    expect(
      findWinner([
        [null, "0", "X"],
        [null, "X", "0"],
        ["X", "X", "0"],
      ])
    ).toEqual("X");
    expect(
      findWinner([
        ["X", "X", "X"],
        [null, "0", "0"],
        ["0", "X", "0"],
      ])
    ).toEqual("X");
    expect(
      findWinner([
        ["X", "0", "0"],
        [null, "X", "0"],
        ["X", "X", "0"],
      ])
    ).toEqual("0");
  });
  test("returns null if no winner", () => {
    expect(
      findWinner([
        ["0", "0", "X"],
        ["X", "X", "0"],
        ["0", "X", null],
      ])
    ).toEqual(null);
    expect(
      findWinner([
        ["X", "0", "0"],
        ["0", "X", "X"],
        [null, null, "0"],
      ])
    ).toEqual(null);
    expect(
      findWinner([
        ["0", "X", "0"],
        ["0", "X", "X"],
        [null, null, null],
      ])
    ).toEqual(null);
    expect(
      findWinner([
        ["X", "0", "X"],
        ["X", "X", "0"],
        ["0", "X", "0"],
      ])
    ).toEqual(null);
  });
});
