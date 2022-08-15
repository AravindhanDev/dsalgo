class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class queueNode {
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

	find(value) {
		let current = this.root;
		if (current === null) return null;
		while (true) {
			if (current.value === value) return current;
			if (current.value > value) {
				if (current.left === null) return null;
				current = current.left;
			}
			if (current.value < value) {
				if (current.right === null) return null;
				current = current.right;
			}
		}
	}

	bfsTraversalArray() {
		let dequeuedNode = this.root,
			queue = [],
			visited = [];
		queue.push(dequeuedNode);
		while (queue.length > 0) {
			dequeuedNode = queue.shift();
			visited.push(dequeuedNode.value);
			if (dequeuedNode.left) queue.push(dequeuedNode.left);
			if (dequeuedNode.right) queue.push(dequeuedNode.right);
		}
		return visited;
	}

	bfsTraversalList() {
		let queue = new Queue(),
			visited = [],
			dequeuedNode = this.root;
		queue.enqueue(dequeuedNode);
		while (queue.length > 0) {
			dequeuedNode = queue.deque();
			visited.push(dequeuedNode.value);
			if (dequeuedNode.left) queue.enqueue(dequeuedNode.left);
			if (dequeuedNode.right) queue.enqueue(dequeuedNode.right);
		}
		return visited;
	}

	dfsPreOrderTraverse() {
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		let data = [];
		traverse(this.root);
		return data;
	}

	dfsPostOrderTraverse() {
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		let data = [];
		traverse(this.root);
		return data;
	}

	dfsInOrderTraverse() {
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		let data = [];
		traverse(this.root);
		return data;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(data) {
		let newNode = new queueNode(data);
		if (this.length === 0) {
			this.first = newNode;
			this.last = this.first;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
	}

	deque() {
		if (this.first === null) return null;
		let current = this.first;
		this.first = current.next;
		current.next = null;
		this.length--;
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
console.log(tree.dfsPreOrderTraverse());
console.log(tree.dfsPostOrderTraverse());
console.log(tree.dfsInOrderTraverse());
