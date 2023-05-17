export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('fillings are required');
 if (typeof sandwich !== 'object' || sandwich === null) {
    return "fillings are required";
  }
  if (Array.isArray(sandwich.fillings)) {
    return sandwich.fillings;
  } else {
    return "fillings are required";
  }
	}


export function isFromManchester(person) {
	if (person === undefined) return false ;
 if (person.city === "Manchester") return true;
 else return false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people are required');
		const busesNeeded = Math.ceil(people / 40);
		return busesNeeded;
 }


export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
		if (!Array.isArray(arr)) return 0;
		// Filter the array to only include the word 'sheep'
		const sheepArray = arr.filter((element) => element === 'sheep');
		return sheepArray.length;
 }


export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
		else if (typeof person !== 'object' || person.length === 0) return false;
		else if (typeof person.address !== 'object' || person.address === null ||
		typeof person.address.postCode !== 'string' || person.address.postCode.length === 0) return false;
        else if (person.address.postCode[0] === 'M' && person.address.city === 'Manchester')  return true;
	else return false; 
 }

	

