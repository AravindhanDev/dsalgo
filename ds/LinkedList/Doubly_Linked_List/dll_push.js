class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
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
		return this;
	}
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
console.log(dll);
