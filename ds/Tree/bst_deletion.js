class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
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
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
			if (value > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	remove(value) {
		this.root = this.removeNode(this.root, value);
	}

	removeNode(current, value) {
		if (current === null) return current;
		if (value === current.value) {
			if (current.left === null && current.right === null) {
				return null;
			} else if (current.left === null) {
				return current.right;
			} else if (current.right === null) {
				return current.left;
			} else {
				let tempNode = this.kthSmallestNode(current.right);
				current.value = tempNode.value;
				current.right = this.removeNode(current.right, tempNode.value);
				return current;
			}
		} else if (value < current.value) {
			current.left = this.removeNode(current.left, value);
			return current;
		} else {
			current.right = this.removeNode(current.right, value);
			return current;
		}
	}

	kthSmallestNode(node) {
		while (!node.left === null) node = node.left;
		return node;
	}
}

let tree = new BinarySearchTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);
console.log(tree.remove(20));
