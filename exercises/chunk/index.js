// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
	// size = chunk size
	// a = array.length b = size c = a % b
	let a = array.length+1;
	let b = size;
	let c = (array.length+1) % size
	let newLength = ((a - c) / b)+c;

	let newArray = [];
	//new Array(newLength).fill([]);
	let indx = 0;

	for(i=0; i < newLength; i++) {
		if(indx < array.length) {
			newArray.push(array.slice(indx, indx+size));
			indx+=size;
		} else if(indx === array.length-1) {
			newArray.push(array.slice(indx));
		}
		
		

	}
	console.log(newArray);
	return newArray;

}

module.exports = chunk;
