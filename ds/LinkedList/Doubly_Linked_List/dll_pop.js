class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.head = this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
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
	pop() {
		if (this.head === null) return undefined;
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
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
console.log(dll);
