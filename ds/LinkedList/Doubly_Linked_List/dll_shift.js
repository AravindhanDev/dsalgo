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
	shift() {
		if (this.head === null) return undefined;
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
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
console.log(dll);
