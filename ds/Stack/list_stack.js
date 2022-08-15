class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(data) {
		const st = new Node(data);
		if (this.size === 0) {
			this.first = st;
			this.last = this.first;
		} else {
			let current = this.first;
			st.next = current;
			this.first = st;
		}
		this.size++;
		return this.size;
	}
	pop() {
		if (this.size === 0) return null;
		let current = this.first;
		if (this.first === this.last) this.last = null;
		this.first = current.next;
		current.next = null;
		this.size--;
		return current.data;
	}
}

const stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
