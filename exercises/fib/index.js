// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	let curr = 0;
	let prev = 0;
	let nxt = 0;

	let nth = 0;

	for(i = 0; i < n; i++) {
		if(i < 1) {// if this is the first round
			curr = 1;
			prev = 0;
			nxt = 1;
		} else {// if this is after 0
			nxt = curr + prev;
			prev = curr;
			curr = nxt;

		}// end else
		nth = nxt;
		// console.log(nth);

	}// endof forloop
	return nth;
}

module.exports = fib;
