class ArrayDS {
	constructor() {
		this.list = new Array();
	}
	print() {
		return this.list;
	}
	push(data) {
		this.list.push(data);
	}
	unshift(data) {
		this.list.unshift(data);
	}
	pop() {
		this.list.pop();
	}
	shift() {
		this.list.shift();
	}
	sort() {
		this.list.sort((a, b) => a - b);
	}
	insert(pos, ele) {
		this.list.splice(pos, 0, ele);
	}
	remove(pos) {
		this.list.splice(pos, 1);
	}
}

const list = new ArrayDS();
console.log(list.print());
