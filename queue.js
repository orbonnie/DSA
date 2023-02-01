class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (this.size) {
      this.end.next = node;
      node.prev = this.end;
    } else {
      this.start = node;
    }
    this.end = node;
    this.size++;
  }

  dequeue() {
    if (this.size) {
      const result = this.start.val;

      if (this.size === 1) {
        this.start = null;
        this.end = null;

      } else {
        this.start.next.prev = null;
        this.start = this.start.next;

      }

      this.size--;
      return result;

    } else return null;
  }
}

let q = new Queue();
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.enqueue(8);