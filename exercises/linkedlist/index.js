// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}// end node class

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		let newNode = new Node(data, this.head); // make a new node
			this.head = newNode;
			// console.log(this.head);
		
	}

	size() {
		let count =0;
		let currentNode = this.head;
		while(currentNode != null){
			currentNode = currentNode.next; 
			count++;
		}
		return count;

	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		};

		let node = this.head;
		while(node.next != null) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null; 
	}

	removeFirst() {
		let count =0;
		let currentNode = this.head;
		let lastNode = {};

		while(currentNode != null){
			lastNode = currentNode;
			currentNode = currentNode.next; 
			count++; 
		}

		currentNode = this.head;
		let lastNode2 ={};

		if(count < 2){
			this.head = null;
		} else { 

			this.head = this.head.next;

		}


	}

	removeLast() {
		let count =0;
		let currentNode = this.head;
		let lastNode = {};

		while(currentNode != null){
			lastNode = currentNode;
			currentNode = currentNode.next; 
			count++;
		}

		currentNode = this.head;
		let lastNode2 ={};

		if(count < 2){
			this.head = null;
		} else {
			while(currentNode.data != lastNode.data) {
				lastNode2 = currentNode;
				currentNode  = currentNode.next;
			}
			lastNode2.next = null;
		}
	}

	insertLast(data) {
		let last = this.getLast();

		if(last) {
			last.next = new Node(data);

		}
		else {
			this.head = new Node(data);
		}

	}

	getAt(num) {

		let count = 0;
		let node = this.head;
		while(node) {
			if(count === num) {
				return node;
			}

			count++;
			node = node.next; 
			

		}
		return null;
	}

	removeAt(num) {
		
		if(!this.head) {
			return num; 
		}
		if(num === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(num - 1);
		if(!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next; 

	}

	insertAt(data, num) {
		if(!this.head) {// if there is no head
			this.head = new Node(data);
			return;

		}

		if(num === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		
		const prevNode = this.getAt(num - 1) || this.getLast(); 
		const newNode = new Node(data, prevNode.next);  
		prevNode.next = newNode; 
	

	}

	forEach(func) {

		
		let node = this.head;
		let counter = 0;
		while(node) {
			func(node, counter);
			node = node.next;
			counter++
		}

		
	}

}

module.exports = { Node, LinkedList };
