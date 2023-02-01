class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
  constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.size) {
			this.last = node;
		}
		this.node.next = this.first;
		this.first = node;
		this.size++;
		return this.size;
	}

	pop() {
		if (this.size) {
			const first = this.first.val;

			if (this.size === 1) {
				this.first = null;
				this.last = null;
			} else {
				this.first = this.first.next;
			}

			this.size--;
			return first;
		} else return null;
	}
}