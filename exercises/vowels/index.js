// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowelList = {
		a: 0,
		e: 0,
		i:0,
		o:0,
		u:0
	}
	let count = 0;
	for(i=0; i < str.length; i++) {
		let letter = str.charAt(i).toLowerCase();
		if(vowelList.hasOwnProperty(letter)) {
			count++;

		}

	}
	return count;
}

module.exports = vowels;
