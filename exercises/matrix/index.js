// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



function fillMatrix(n) {
	let tempMatrix = new Array(n).fill([]);
	for(p in tempMatrix) {
		tempMatrix[p] = new Array(n).fill("x");

	}
	return tempMatrix;

}
function matrix(n) {
	//number of passes = n x 2 - 1
	// total number of spaces to fill = n x n

	/* ---to find turn points----
	   lt = last turn point
	   nt = next turn point
	   ttp = total turn points
	   mf = max flips
	   mf = n - 2
	   nt = lt + mf
	   ttp = n * 2 -2
	*/

	let theMatrix = fillMatrix(n);
	// console.log(theMatrix);
	let axis = {
		x:0,
		y:0
	}

	let flag ="x";
	let fills = n * n; // last number to be printed in matrix
	let direction = true;

	let lt = n; // last turn point. Set to n by defualt
	let nt = n-1; // the next turn point default
	let howManyTurns =0;
	let maxAmntOfTurns = n * 2 -1;
	let maxNumTurns = n-1;
	let adjIndex = 0;

	for(i =0; i < fills; i++) {
	// for each space in the matrix 
	// we will fill it with the proper value and decide which direction to go
	// and how far based on the "turn points" that we calculated fron the value of n

		let fillValue = i + 1; // what to put in the space

		// console.log("x is" + axis.x + " y is " + axis.y + " fill with:" + fillValue);

		//fill the current space
		theMatrix[axis.y][axis.x] = fillValue;

		
		

		if(i == nt) {// are we at the next turn point?
			if(howManyTurns == maxNumTurns) {// if have we made the max number of turns
				adjIndex = 1;
				nt = i + n - adjIndex;

			} 
			
			if(howManyTurns <= 0){// if this is the 1st turn
				// if this is the first turn just flip the flag to the other indice (x/y)

				flag === 'y' ? flag = 'x' : flag = 'y';
				// console.log('this is the first turn just flip the flag'); 
				howManyTurns++;
				nt = nt + n - 1;

			
				// console.log('next turn point is' + nt + "..." + howManyTurns + " turns so far!");  
				

			} else { 
				howManyTurns++; // increase the number of turns as this is a new turn
				// console.log('this is a turn point! ' + howManyTurns + " turns so far!");
				
				flag == 'y' ? flag = 'x' : flag = 'y'; // flip the flag

				//is this a second turn?
				if(howManyTurns % 2 == 0) {// if it's divisible by 2
					//change the direction of movement true = forward false = backward
					direction  ?  direction = false : direction = true;
					// console.log('direction changes to' + direction);
				
				}
				adjIndex++;

				//set next turn point
				nt = i + n - adjIndex; // index + n - index adjustment
				// console.log('next turn point is' + nt + " " + howManyTurns + " turns so far!");	

			}// end else

		} // end are we at a turn point

		//continue moving through the matrix------------------

		if(direction) {// if moving forward
			if(flag == 'x') {
				axis.x +=1;
				// console.log('x has been increased!'); 

			} else {
				axis.y +=1;
				// console.log('y has been increased!');
			}

		} else {// if moving backward
			if(flag == 'x') {
				axis.x -=1;
				// console.log('x has been decreased!');

			} else {
				axis.y -=1;
				// console.log('y has been decreased!')
			}

		}


		

		

		
	
		// console.log(theMatrix);

	}

	console.log(theMatrix);
return theMatrix
}

module.exports = matrix;
