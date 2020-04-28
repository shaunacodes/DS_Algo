// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function addSpaces(num, str) {
	for(i=0; i < num; i++) {
		str +=" ";

	}
	return str;
}

function addSymbols(num, str) {
	for(i=0; i < num; i++) {
		str +="#";

	}
	return str;
}




function steps(n) {
// number of symbols = i + 1
// number of spaces = n - (i+1)

	let stair = "";
	let numSpacesToAdd = 0;
	let numSymbolsToAdd = 0;

	for(o =0; o < n; o++) {
		if(n=== 1){
			console.log("#");

		} else{
			numSymbolsToAdd = o + 1;
			numSpacesToAdd = n - (o + 1);

			stair = addSymbols(numSymbolsToAdd, stair);
			stair = addSpaces(numSpacesToAdd, stair)
			// console.log('this is step ' + o);
			console.log(stair);
			stair ="";

		}
		

	}

}

module.exports = steps;
