class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		let q = new Node(data);
		if (this.size === 0) {
			this.first = q;
			this.last = this.first;
		} else {
			this.last.next = q;
			this.last = q;
		}
		this.size++;
		return this.size;
	}

	dequeue() {
		if (this.size === 0) return null;
		let current = this.first;
		if (this.size === 1) this.last = null;
		this.first = current.next;
		current.next = null;
		this.size--;
		return current.data;
	}
}

const q = new Queue();
console.log(q.enqueue("First"));
console.log(q.enqueue("Second"));
console.log(q.enqueue("Third"));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
