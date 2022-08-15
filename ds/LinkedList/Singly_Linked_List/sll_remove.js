class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	traverse() {
		let current = this.head;
		if (this.length === 0) return "Empty Linked List";
		let i = 0;
		while (i < this.length) {
			console.log(current.data);
			current = current.next;
			i++;
		}
	}
	push(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return true;
	}
	get(pos) {
		if (pos >= this.length || pos < 0) return null;
		let i = 0;
		let current = this.head;
		while (i !== pos) {
			current = current.next;
			i++;
		}
		return current;
	}
	set(pos, data) {
		let node = this.get(pos);
		if (!node) return false;
		node.data = data;
		return true;
	}
	shift() {
		if (this.length <= 0) return undefined;
		let current = this.head;
		this.head = current.next;
		current.next = null;
		this.length--;
		return current.data;
	}
	pop() {
		if (this.length <= 0) return undefined;
		let current = this.head;
		let prev = current;
		while (current.next !== null) {
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.length--;
		return current.data;
	}
	remove(pos) {
		if (pos >= this.length || pos < 0) return undefined;
		if (pos === 0) return this.shift();
		if (pos === this.length - 1) return this.pop();
		let prev = this.get(pos - 1);
		let current = prev.next;
		prev.next = current.next;
		current.next = null;
		this.length--;
		return current.data;
	}
}
const sll = new SinglyLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
sll.push(40);
sll.traverse();
console.log();
sll.traverse();
