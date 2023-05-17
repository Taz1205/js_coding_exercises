export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	else 
		if (!Array.isArray(nums)) return []; 
		// Map each number to its square
		else {
			const squares = nums.map((num) => num ** 2);
		return squares;
		}
  }

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	else if (!Array.isArray(words) || words.length === 0) return 'words are required';
 else {
	let camelCase = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
		const capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
		camelCase += capitalized;
 }
  return camelCase;
}
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
		else if (!Array.isArray(people) || people.length === 0) {
  return 0;
		}
		else {
		let totalSubjects = 0;
		for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.subjects && Array.isArray(person.subjects)) {
			totalSubjects += person.subjects.length;
  }
		}  
		return totalSubjects;
	}
  }

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	else if (ingredient === undefined) throw new Error('ingredient is required');
	else if (!menu || !ingredient) return false;
  for (let menuItem of menu) {
		if (menuItem.ingredients && menuItem.ingredients.includes(ingredient)) return true;
  }
  return false; 
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	else if (arr1.length === 0 || arr2.length === 0 || !Array.isArray(arr1) || !Array.isArray(arr2)) return []; 
		const duplicatesSet = new Set();
		for (let num of arr1) {
  if (arr2.includes(num)) {
			duplicatesSet.add(num);
  }
		}
		const duplicatesArray = Array.from(duplicatesSet).sort((a, b) => a - b);
		return duplicatesArray;
  }


