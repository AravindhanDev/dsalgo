class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(data) {
		let newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (data === current.data) return undefined;
			if (data < current.data) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
			if (data > current.data) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(data) {
		if (this.root === null) return -1;
		let current = this.root;
		while (true) {
			if (current.data === data) return 1;
			if (current.data < data) {
				if (current.right === null) return -1;
				current = current.right;
			}
			if (current.data > data) {
				if (current.left === null) return -1;
				current = current.left;
			}
		}
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
console.log(tree);
console.log(tree.find(12));
