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
		if (this.length === 0) return "Empty Linked List";
		let i = 0;
		while (i < this.length) {
			console.log(current.data);
			current = current.next;
			i++;
		}
	}
	push(data) {
		const newNode = new Node(data);
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
	pop() {
		if (this.length <= 0) return undefined;
		let current = this.head;
		let prev = current;
		while (current.next !== null) {
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.length--;
		return current.data;
	}
}

const sll = new SinglyLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
sll.push(40);
sll.traverse();
console.log("popped item: ", sll.pop());
console.log("popped item: ", sll.pop());
console.log("popped item: ", sll.pop());
console.log("popped item: ", sll.pop());
sll.traverse();