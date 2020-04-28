// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	// the place to store the queue
	constructor() {
		this.myQ = [];
	}

	add(record) {
		this.myQ.unshift(record);

	}

	remove() {
		return this.myQ.pop();


	}

}

module.exports = Queue;
