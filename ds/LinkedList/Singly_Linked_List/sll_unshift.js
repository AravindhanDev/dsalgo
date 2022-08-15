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
		if (this.length === 0) console.log("Empty Linked List");
		let i = 0;
		while (i < this.length) {
			console.log(current.data);
			current = current.next;
			i++;
		}
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
}

const sll = new SinglyLinkedList();
sll.unshift(50);
sll.unshift(40);
sll.unshift(30);
sll.unshift(20);
sll.unshift(10);
sll.traverse();
