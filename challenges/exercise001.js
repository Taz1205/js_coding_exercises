// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('A word is required');
	else if (typeof word !== 'string' || word.length === 0) {
		console.log("A word is required");
	}
	return word.charAt(0).toUpperCase() + word.slice(1);
	}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	if (typeof firstName !== 'string' || firstName.length === 0 ) {
   console.log("first name is required");}
  if ( typeof lastName !== 'string' || lastName.length === 0) {
   console.log("second name is required");
}
const firstInitial = firstName.charAt(0).toUpperCase();
const lastInitial = lastName.charAt(0).toUpperCase();
return firstInitial + "." + lastInitial;

}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	if (typeof originalPrice !== 'number' || typeof vatRate !== 'number' ||
	isNaN(originalPrice) || isNaN(vatRate)) {
		console.log("Invalid number");
  return NaN;
  
}
const vatAmount = originalPrice * (vatRate / 100);
const totalPrice = originalPrice + vatAmount; 
if (!Number.isInteger(totalPrice)) {
return Number(totalPrice.toFixed(2));
}
return totalPrice;
}  
	

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	if (originalPrice <= 50 && reduction === 0) {
		reduction = 0; 
	} else if (originalPrice < 80 && reduction === 15) {
			reduction = 0.15;
  } else if (originalPrice <= 100 && reduction === 33.3) {
		reduction = 0.333; 
  } else if (originalPrice >= 100 && reduction === 50) {
		reduction = 0.5; 
 }
 const salePrice = originalPrice - (originalPrice * reduction);
 if (Number.isInteger(salePrice)){
 return salePrice;
 }
 else
{   
	return Number(salePrice.toFixed(2));
	}
}


export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	if (typeof str !== 'string' || str.length === 0) {
		console.log("str is required");
 }
 // Calculate the middle index and length
 const middleIndex = Math.floor(str.length / 2);
 const middleLength = str.length % 2 === 0 ? 2 : 1;
 if (middleLength === 1) {
 return str.slice(middleIndex, middleIndex + middleLength);
} else {
	let middleIndex1 = middleIndex-1;
	return str.slice(middleIndex1, middleIndex1 + middleLength);
}
	}


export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	if (typeof word !== 'string' || word === '' ) {
		console.log("word is required");
		return "word is required";
  }
  const characters = word.split('');
  const reversedCharacters = characters.reverse();
 const reversedString = reversedCharacters.join('');
 return reversedString;
	}


export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words are required');
	if (!Array.isArray(words)) {
		console.log("words are required");
		return "words are required";
  }
  const reversedWords = words.map(word => reverseString(word));
  return reversedWords;
	}
	function reverseString(str) {
 return str.split('').reverse().join('');
	}


export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users are required');
	if (!Array.isArray(users) || users.length === 0) {
		return "users are required";
  }
  let linuxUserCount = 0;
  for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.type === 'Linux') {
           linuxUserCount++;
		}
  }
 return linuxUserCount;
	}


export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores are required');
	if (!Array.isArray(scores) || scores.length === 0) {
		console.log("scores are required");
		return "scores are required";
 }
  const sum = scores.reduce((acc, score) => acc + score, 0);
  const mean = sum / scores.length;
if ((Number.isInteger(mean))) return mean;
else return Number(mean.toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	if (typeof n !== 'number' || isNaN(n)) {
		return 'Invalid input';
 }
  if (n % 3 === 0 && n % 5 === 0) {
		return 'fizzbuzz';
 } else if (n % 3 === 0) {
		return 'fizz';
 } else if (n % 5 === 0) {
		return 'buzz';
  } else {
		return n;
 }
	
}
