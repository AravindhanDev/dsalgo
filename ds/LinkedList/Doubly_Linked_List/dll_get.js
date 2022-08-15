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
}

const dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
console.log(dll);
