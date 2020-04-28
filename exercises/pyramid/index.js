// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function addSpacesFront(num, str) {
	for(i=0; i < num; i++) {
		str =" " + str;

	}
	return str;
}

function addSpacesBack(num, str) {
	for(i=0; i < num; i++) {
		str +=" ";

	}
	return str;
}

function addSymbols(num) {
	let str = "";
	for(i=0; i < num; i++) {
		str +="#";

	}
	
	return str;
}


function pyramid(n) {
// number of symbols = 2i + 1
// number of spaces on one side = n - (i+1)

	let stair = "";
	let numSpacesToAdd = 0;
	let numSymbolsToAdd = 0;

	for(o =0; o < n; o++) {
		if(n === 1){ // edge case for 1
			console.log("#");

		} else if(o === 0){ // if this is the first row	

			numSpacesToAdd = 2 * (n-1) / 2;
			let temp =" ";
			stair = "#";

			temp = temp.repeat(numSpacesToAdd);
			stair = temp + stair + temp;

			
			console.log(stair);
			stair = ""; // reset stair

		}  else{ // for all other rows

			numSymbolsToAdd = (2 * (o + 1)) -1;
			numSpacesToAdd = n - (o + 1);

			stair = addSymbols(numSymbolsToAdd);
			// console.log('add this many symbols ' + numSymbolsToAdd);

			stair = addSpacesFront(numSpacesToAdd, stair);
			stair = addSpacesBack(numSpacesToAdd, stair);


			console.log(stair);
			stair ="";  // reset stair

		} 
		

	}


}

module.exports = pyramid;
