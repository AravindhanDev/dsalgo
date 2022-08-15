const stack = {
	size: 0,
	max: 0,
	set maxSize(size) {
		this.max = size;
	},
	items: [],
	push: (data) => {
		if (stack.isFull()) {
			console.log("Stack OverFlow");
			return;
		}
		stack.items.push(data);
		stack.size++;
	},
	pop: () => {
		if (stack.isEmpty()) {
			console.log("Stack Underflow");
			return;
		}
		stack.items.pop();
		stack.size--;
	},
	isEmpty: () => {
		return stack.size <= 0 ? true : false;
	},
	isFull: () => {
		return stack.items.length === stack.max ? true : false;
	},
	show: function () {
		console.log(this.items);
	}
};

stack.maxSize = 2;
console.log(stack.max);
console.log(stack.size);
stack.push(10);
console.log(stack.max);
console.log(stack.size);
