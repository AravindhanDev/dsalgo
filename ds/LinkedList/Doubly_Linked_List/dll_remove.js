class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
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
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	get(pos) {
		if (pos >= this.length || pos < 0) return null;
		let len = Math.floor(this.length / 2);
		let i, current;
		if (pos <= len) {
			i = 0;
			current = this.head;
			while (i !== pos) {
				current = current.next;
				i++;
			}
		} else {
			i = this.length - 1;
			current = this.tail;
			while (i !== pos) {
				current = current.prev;
				i--;
			}
		}
		return current;
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
		return delItem;
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
	remove(pos) {
		if (pos >= this.length || pos < 0) return undefined;
		if (pos === 0) return this.shift();
		if (pos === this.length - 1) return this.pop();
		let delItem = this.get(pos);
		delItem.prev.next = delItem.next;
		delItem.next.prev = delItem.prev;
		delItem.next = null;
		delItem.prev = null;
		this.length--;
		return delItem;
	}
}

const dll = new DoublyLinkedList();
dll.push(5);
dll.push(10);
dll.push(15);
dll.push(20);
console.log(dll.remove(0));
