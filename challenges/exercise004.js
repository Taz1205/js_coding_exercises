export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  else if (!Array.isArray(nums) || nums === 0) return [];
  const smallNums = nums.filter((num) => num < 1);
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  else if (!char) return [];
  else if (
    !Array.isArray(names) ||
    typeof char !== "string" ||
    names.length === 0 ||
    char.length === 0
  )
    return [];
  const filteredNames = names.filter(
    (name) => name.charAt(0).toLowerCase() === char.toLowerCase()
  );
  return filteredNames;
}

export function findVerbs(words) {
  if (!words) return [];
  else if (!Array.isArray(words)) return [];
  const verbs = words.filter((word) => /^to\s/.test(word));
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  else if (!Array.isArray(nums)) return [];
  return nums.filter((num) => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  else if (!Array.isArray(users) || users.length === 0) return [];
  const cities = [];
  users.forEach((user) => {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!Array.isArray(nums) || nums === 0) return [];
  const result = [];
  nums.forEach((num) => {
    if (typeof num === "number" && num >= 0) {
      const squareRoot = Math.sqrt(num);
      if (!Number.isInteger(squareRoot))
        result.push(Number(squareRoot.toFixed(2)));
      else result.push(squareRoot);
    }
  });
  return result;
}

export function findSentencesContaining(sentences, str) {
  if (
    !Array.isArray(sentences) ||
    typeof str !== "string" ||
    sentences.length === 0 ||
    str.length === 0
  ) {
    return [];
  }
  return sentences.filter((sentence) =>
    sentence.toLowerCase().includes(str.toLowerCase())
  );
}

export function getLongestSides(triangles) {
  if (!Array.isArray(triangles) || triangles.length === 0)
    return "triangles are required";
  return triangles.map((triangle) => {
    if (Array.isArray(triangle) && triangle.length === 3) {
      return Math.max(...triangle);
    } else {
      return "Invalid triangle data";
    }
  });
}
