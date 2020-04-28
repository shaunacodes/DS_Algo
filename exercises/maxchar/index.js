// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let numObj = {};
	let mostFrequent ='';
	let numOccur =0;
	for(ch of str) {
		if(numObj.hasOwnProperty(ch)){
			numObj[ch] +=1;
		} else {
			numObj[ch]=1;
		}
	}

	for(thing in numObj) {
		if(numObj[thing] > numOccur) {
			numOccur = numObj[thing];
			mostFrequent = thing;
		}
	}
return mostFrequent;
}

module.exports = maxChar;
