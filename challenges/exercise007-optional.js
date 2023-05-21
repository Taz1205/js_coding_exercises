/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  //if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number" || n.length === 0) return 0;
  let sum = 0;
  const digits = n.toString().split("");

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
  if (
    typeof start !== "number" ||
    start.length === 0 ||
    typeof end !== "number" ||
    end.length === 0 ||
    typeof step !== "number"
  )
    return 0;
  else if (start === 0 && end === 0 && step === 0) return 0;
  const range = [];

  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= step) {
      range.push(i);
    }
  }

  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (
    !Array.isArray(users) ||
    users.length === 0 ||
    typeof date !== "string" ||
    date.length === 0
  )
    return "Invalid input or missing value";
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (regex.test(date) === false)
    return "date has to be in this format: YYYY-MM-DD";
  const alertList = [];

  users.forEach((user) => {
    const userScreenTime = user.screenTime.find((entry) => entry.date === date);
    if (
      !userScreenTime ||
      !userScreenTime.usage ||
      Object.values(userScreenTime.usage).some((time) => time < 0)
    )
      return [];
    else {
      const totalUsage = Object.values(userScreenTime.usage).reduce(
        (sum, minutes) => sum + minutes,
        0
      );
      if (totalUsage > 100) {
        alertList.push(user.username);
      }
    }
  });

  return alertList;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined || hexStr.length === 0 || typeof hexStr !== "string")
    return "hexadecimal string is required";
  const hexPattern = /^#?([0-9A-Fa-f]{6})$/;

  if (!hexPattern.test(hexStr)) {
    return "Invalid hexadecimal color code";
  }
  const hex = hexStr.startsWith("#") ? hexStr.slice(1) : hexStr;

  const redHex = hex.substring(0, 2);
  const greenHex = hex.substring(2, 4);
  const blueHex = hex.substring(4, 6);

  const red = parseInt(redHex, 16);
  const green = parseInt(greenHex, 16);
  const blue = parseInt(blueHex, 16);

  return `rgb(${red},${green},${blue})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined || board.length === 0 || !Array.isArray(board))
    return "invalid or empty board";
  if (!Array.isArray(board) || board.length !== 3) {
    return "board has to be an array of length 3";
  }

  for (const row of board) {
    if (!Array.isArray(row) || row.length !== 3) {
      return "each row of the board has to be an array of length 3";
    }

    for (const cell of row) {
      if (cell !== "X" && cell !== "0" && cell !== null) {
        return "each cell of the board has to be either X or 0 or null";
      }
    }
  }

  const winningConditions = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // Top row
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ], // Middle row
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // Bottom row
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // Left column
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ], // Middle column
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], // Right column
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // Diagonal from top left to bottom right
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ], // Diagonal from top right to bottom left
  ];

  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const [rowC, colC] = c;
    const valueA = board[rowA][colA];
    const valueB = board[rowB][colB];
    const valueC = board[rowC][colC];
    if (valueA && valueA === valueB && valueA === valueC) {
      return valueA;
    }
  }

  return null;
};
