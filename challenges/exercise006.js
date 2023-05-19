/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  else if (arr.length === 0 || !Array.isArray(arr))
    throw new Error("A valid input is required");
  let sum = 0;

  arr.forEach((n) => {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  });

  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (str.length === 0 || typeof str !== "string") return false;
  const regex = /^[CGTA]+$/i;
  return regex.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") return false;
  const complementaryPairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const regex = /^[CGTA]+$/i;
  let complementaryDNA = "";
  if (regex.test(str)) {
    for (let i = 0; i < str.length; i++) {
      //console.log(str[i]);
      if (str[i] in complementaryPairs)
        complementaryDNA += complementaryPairs[str[i]];
    }

    return complementaryDNA;
  } else return "";
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  //if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number" || n === null) return false;
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let divisor = 5;

  while (divisor * divisor <= n) {
    if (n % divisor === 0 || n % (divisor + 2) === 0) {
      return false;
    }
    divisor += 6;
  }

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (
    (typeof fill !== "string") | (fill.length === 0) ||
    typeof n !== "number" ||
    Number.isNaN(n)
  )
    return false;
  const matrix = Array.from({ length: n }, () => Array(n).fill(fill));
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (
    staff.length === 0 ||
    day.length === 0 ||
    !Array.isArray(staff) ||
    typeof day !== "string"
  )
    return false;
  const staffScheduled = staff.filter((staffMember) =>
    staffMember.rota.includes(day)
  );

  return staffScheduled.length >= 3;
};
