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
		return this;
	}
	reverse() {
		let head = this.head;
		let tail = this.tail;
		let i = 0;
		while (i < Math.floor(this.length / 2)) {
			let node = head.val;
			head.val = tail.val;
			tail.val = node;
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
console.log(dll);
dll.reverse();
console.log(dll);
