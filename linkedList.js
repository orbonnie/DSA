class Node {
  constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insertHead(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
	}

	insertTail(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
		}else {
			this.tail.next = node;
		}

		this.tail = node;
		this.length++;
	}

	removeHead() {
		if (!this.head) return null;

		const head = this.head.val;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
		}

		this.length--;
		return head;
	}

	removeTail() {
		if (!this.head) return null;

		const tail = this.tail.val;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let curr = this.head;
			while (curr.next) {
				if (curr.next === this.tail) {
					this.tail = curr;
					curr.next = null;
				} else {
					curr = curr.next;
				}
			}
		}

		this.length--;
		return tail;
	}

	containsNode(val) {
		let curr = this.head;

		while (curr) {
			if (curr.val === val) return true;
			curr = curr.next;
		}

		return false;
	}

}