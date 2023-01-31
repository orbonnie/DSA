class Node {
  constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoubleLL {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	addHead(val) {
		const node = new Node(val);

		if (!this.length){
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
		}

		this.head = node;
		this.length++;
	}

	addTail(val) {
		const node = new Node(val);

		if (!this.length) {
			this.head = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
		}

		this.tail = node;
		this.length++;
	}

	removeHead() {
  	if (this.length) {
			const head = this.head.val;
			this.head.next.prev = null;
			this.head = this.head.next

			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			}

			this.length--;
			return head;
	} else return null;
	}

	removeTail() {

		if (this.length) {
			const tail = this.tail.val;
			this.tail.prev.next = null;
			this.tail = this.tail.prev;

			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			}

			this.length--;
			return tail;

		} else return null;
	}

	containsNode(val) {
    let curr = this.head;

    while(curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

}