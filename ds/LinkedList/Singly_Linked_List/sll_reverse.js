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
	unshift(data) {
		let newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
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
	insert(pos, data) {
		if (this.length < pos || pos < 0) return false;
		if (pos === 0) return this.unshift(data);
		if (pos === this.length) return this.push(data);
		let newNode = new Node(data);
		let prev = this.get(pos - 1);
		newNode.next = prev.next;
		prev.next = newNode;
		this.length++;
		return true;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

const sll = new SinglyLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
sll.push(40);
sll.traverse();
console.log();
sll.reverse();
sll.traverse();
