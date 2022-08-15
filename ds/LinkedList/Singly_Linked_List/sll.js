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
		if (this.length === 0) "Empty Linkes List";
		let i = 0;
		while (i < this.length) {
			console.log(current.data);
			current = current.next;
			i++;
		}
	}
	push(data) {
		let newNode = new Node(data);
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
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return true;
	}
	pop() {
		if (this.head === null) return false;
		let current = this.head;
		let prev = current;
		while (current.next !== null) {
			prev = current;
			current = current.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (this.head === null) return false;
		let current = this.head;
		this.head = current.next;
		current.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	get(pos) {
		if (this.length <= pos || pos < 0) return null;
		let current = this.head;
		let i = 0;
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
	remove(pos) {
		if (this.length <= pos || pos < 0) return undefined;
		if (pos === 0) return this.shift();
		if (pos === this.length - 1) return this.pop();
		let prev = this.get(pos - 1);
		let current = prev.next;
		prev.next = current.next;
		this.length--;
		return current.data;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		let prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	search(data) {
		if (this.length <= 0) return 0;
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			if (current.data === data) return 1;
			current = current.next;
		}
		return 0;
	}
}

const sll = new SinglyLinkedList();
const data = [10, 20, 30, 40, 50];
for (let d of data) {
	sll.push(d);
}
sll.traverse();
console.log();
