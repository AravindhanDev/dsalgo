class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class QueueNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (current.value === value) return this;
			if (current.value > value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
			if (current.value < value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	bfsTraversalArray() {
		let queue = [],
			visited = [],
			node = this.root;
		queue.push(node);
		while (queue.length > 0) {
			node = queue.shift();
			visited.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return visited;
	}

	bfsTraversalList() {
		let queue = new Queue(),
			visited = [],
			node = this.root;
		queue.enqueue(node);
		while (queue.size > 0) {
			node = queue.dequeue();
			visited.push(node.value);
			if (node.left) queue.enqueue(node.left);
			if (node.right) queue.enqueue(node.right);
		}
		return visited;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		let newNode = new QueueNode(data);
		if (this.size === 0) {
			this.first = this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return true;
	}

	dequeue() {
		if (this.size === 0) return null;
		let current = this.first;
		this.first = current.next;
		current.next = null;
		this.size--;
		return current.data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfsTraversalList());
