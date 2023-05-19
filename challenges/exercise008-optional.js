/* 
	👉 These exercises are a quick practice of some modern JavaScript features.
*/

const colorConvert = require("color-convert");

export function printColours(colours) {
  if (
    !Array.isArray(colours) ||
    colours.length === 0 ||
    colours.includes("") ||
    colours.some((c) => typeof c !== "string")
  ) {
    return false;
  }

  const isValid = colours.every((c) => {
    const rgb = colorConvert.keyword.rgb(c);
    return Array.isArray(rgb);
  });

  if (isValid) {
    return [...colours];
  } else {
    return false;
  }
}

export function shoppingList(list, newItem) {
  if (!Array.isArray(list) || list.some((c) => typeof c !== "string")) {
    return false;
  }
  if (Array.isArray(newItem) && newItem.length > 0) {
    return [...list, ...newItem];
  } else {
    return [...list];
  }
}

export function highestNumber(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((n) => typeof n !== "number")
  ) {
    return false;
  }

  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (typeof string !== "string" || string.length === 0) {
    return [];
  }

  return [...string];
}

export function addressLookUp(user) {
  if (
    !isObject(user) ||
    Object.keys(user).length === 0 ||
	!user.address ||
    !user.address.postcode )
  
  {
    return undefined;
  }
else 
  return user?.address?.postcode;
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
