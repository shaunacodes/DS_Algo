// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function stripString(str) {
	//turns the string into an object returns new obj
	let objStr = {};
	for(st of str) {
		if(objStr.hasOwnProperty(st)){
			objStr[st]+=1;
		} else {
			objStr[st] = 1;
		}

	}
	return objStr;
}
function doTheyMatch(strA, strB){
	//check 2 objects to see if they are the same
	if(Object.keys(strA).length === Object.keys(strB).length) {
		let strLen = Object.keys(strA).length;
		let flag = "poop";
		for(i in strA) {
			if((strA.hasOwnProperty(i) && strB.hasOwnProperty(i)) && strA[i] === strB[i]) {
				flag = true;
			} else {
				flag = false;
			}

		}
		return flag;

	} else {
		return false;
	}
}

function anagrams(stringA, stringB) {
	//removes special characters and spaces, then calls stripString & doTheyMatch
	//returns true/false flag
	let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
	let strB = stringB.replace(/[^\w]/g, "").toLowerCase();

	let objA = stripString(strA);
	let objB = stripString(strB);
	console.log(objA);

	let flag = doTheyMatch(objA, objB);

return flag;
}

module.exports = anagrams;
