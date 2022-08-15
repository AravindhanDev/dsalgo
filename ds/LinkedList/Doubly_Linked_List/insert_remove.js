class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
			this.length++;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			this.length++;
		}
		return true;
	}
	unshift(val) {
		let newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return true;
	}
	pop() {
		if (this.head === null) return null;
		let delItem = this.tail;
		if (this.length === 1) this.head = this.tail = null;
		else {
			this.tail = delItem.prev;
			this.tail.next = null;
			delItem.prev = null;
		}
		this.length--;
		return delItem.data;
	}
	shift() {
		if (this.head === null) return null;
		let delItem = this.head;
		if (this.length === 1) this.head = this.tail = null;
		else {
			this.head = delItem.next;
			this.head.prev = null;
			delItem.next = null;
		}
		this.length--;
		return delItem;
	}
	get(pos) {
		if (this.length <= pos || 0 > pos) return null;
		let len = Math.floor(this.length / 2);
		let count, current;
		if (pos <= len) {
			count = 0;
			current = this.head;
			while (count !== pos) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count !== pos) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	insert(pos, val) {
		if (this.length < pos || pos < 0) return undefined;
		if (this.length === 0) return this.unshift();
		if (this.length === pos) return this.push();
		let newNode = new Node(val);
		let current = this.get(pos);
		let prev = this.get(pos - 1);
		newNode.next = prev.next;
		newNode.prev = current.prev;
		prev.next = newNode;
		current.prev = newNode;
		this.length++;
		return true;
	}
	remove(pos) {
		if (this.length <= pos || pos < 0) return undefined;
		if (this.length === 0) return this.shift();
		if (this.length - 1 === pos) return this.pop();
		let next = this.get(pos + 1);
		let prev = this.get(pos - 1);
		let current = this.get(pos);
		prev.next = current.next;
		next.prev = current.prev;
		current.next = null;
		current.prev = null;
		this.length--;
		return current;
	}
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
console.log(dll);
