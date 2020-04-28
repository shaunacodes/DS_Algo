// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let origNum ='';
	let revNum = '';
	let posNum = true;

	if(Math.sign(n) < 0){
		posNum = false;
		n*= -1;	

	}

	origNum = n.toString();
	

	for(ch of origNum) {
		revNum = ch + revNum;
	}
	
	revNum = parseInt(revNum, 10);

	if(!posNum) {
		return ~revNum+1;
		
	} 
	return revNum;
}

module.exports = reverseInt;
