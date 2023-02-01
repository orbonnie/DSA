class Node {
  constructor(val) {
    this.val = val;
    this.adjacencies = new Set();
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node.val] = node.adjacencies;
  }

  addEdge(v1, v2) {
    const list = this.adjacencyList;
    list[v1.val].add(v2);
    list[v2.val].add(v1);
  }

  removeVertex(v) {
    this.adjacencyList[v.val].forEach(a => a.adjacencies.delete(v));

    delete this.adjacencyList[v.val];
  }

  removeEdge(v1, v2) {
    const list = this.adjacencyList;
    list[v1.val].delete(v2);
    list[v2.val].delete(v1);
  }

  contains(v) {
    return v.val in this.adjacencyList;
  }
}

// const g = new Graph();
// const n1 = new Node("Chicago");
// const n2 = new Node("Los Angeles");
// const n3 = new Node("Denver");
// const n4 = new Node("Seattle");
// const n5 = new Node("Miami");
// const n6 = new Node("Dallas");
// const n7 = new Node("Tucson");
// const n8 = new Node("Atlanta");

// g.addVertex(n1);
// g.addVertex(n2);
// g.addVertex(n3);
// g.addVertex(n4);
// g.addVertex(n5);
// g.addVertex(n6);
// g.addVertex(n7);
// g.addVertex(n8);
// g.addEdge(n2, n3);
// g.addEdge(n4, n5);
// g.addEdge(n3, n5);
// g.addEdge(n1, n6);
// g.addEdge(n5, n3);
// g.removeEdge(n3, n5);
// g.removeEdge(n1, n5);