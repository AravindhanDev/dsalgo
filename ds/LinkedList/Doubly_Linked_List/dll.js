class Node {
	constructor(data) {
		this.data = data;
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
	traverse() {
		if (this.length <= 0) return "Empty Linked List";
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			console.log(current.data);
			current = current.next;
		}
	}
	push(data) {
		let newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
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
	set(pos, data) {
		let updateElement = this.get(pos);
		if (updateElement === null) return false;
		updateElement.data = data;
		return true;
	}
	insert(pos, data) {
		if (pos > this.length || pos < 0) return false;
		if (pos === 0) return this.unshift(data);
		if (pos === this.length) return this.push(data);
		let newNode = new Node(data);
		let current = this.get(pos);
		current.prev.next = newNode;
		newNode.prev = current.prev;
		newNode.next = current;
		current.prev = newNode;
		this.length++;
		return true;
	}
	remove(pos) {
		if (pos >= this.length || pos < 0) return false;
		if (pos === 0) return this.shift();
		if (pos === this.length - 1) return this.pop();
		let current = this.get(pos);
		current.prev.next = current.next;
		current.next.prev = current.prev;
		current.prev = current.next = null;
		this.length--;
		return current.data;
	}
	reverse() {
		let tail = this.tail;
		let head = this.head;
		let i = 0;
		while (i < Math.floor(this.length / 2)) {
			let node = head.data;
			head.data = tail.data;
			tail.data = node;
			head = head.next;
			tail = tail.prev;
			i++;
		}
		return this;
	}
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
dll.traverse();
console.log();
dll.reverse();
