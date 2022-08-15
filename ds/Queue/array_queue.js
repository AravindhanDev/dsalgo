const queue = {
	items: [],
	enqueue: (data) => {
		queue.items.push(data);
	},
	dequeue: () => {
		queue.items.shift();
	}
};

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.items);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.items);
