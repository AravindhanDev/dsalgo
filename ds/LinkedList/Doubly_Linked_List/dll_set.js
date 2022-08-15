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
	set(pos, data) {
		let node = this.get(pos);
		if (node === null) return false;
		node.val = data;
		return true;
	}
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
console.log(dll);
