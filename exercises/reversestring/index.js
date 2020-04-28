// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// *** Solution #1 *****
//function reverse(str) {

// 	let reversedString = str.split("").reverse().join("");

// 	return reversedString; 
// }

// *** Solution #2 *****
function reverseArray(str) {
	let strArray = [];

	for(i=0; i < str.length ; i++) {
		let revCount = str.length - i - 1;
		strArray.push(str.charAt(revCount));
	}

	return strArray; 
}

function reJoinArray(revArray) {
	let joined = "";
	for(p=0; p < revArray.length; p++) {
		joined+= revArray[p];
	}
	return joined;
}

function reverse(str) {
	let reversedArray = reverseArray(str);
	let reversedString = reJoinArray(reversedArray);

	return reversedString;
}

module.exports = reverse;
