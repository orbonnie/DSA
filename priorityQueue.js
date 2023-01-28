class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }



  class PriorityQueue {
    constructor() {
      this.values = [];
    }

    insert(node) {
      const v = this.values;
      v.push(node);

      let childIdx = v.length - 1;
      let parentIdx = ~~((childIdx - 1) / 2);

      while (v[parentIdx].priority > v[childIdx].priority) {
        [v[parentIdx], v[childIdx]] = [v[childIdx], v[parentIdx]];
        childIdx = parentIdx;
        parentIdx = ~~((childIdx - 1) / 2);
      }

    }

    // Recursion

    insertNode(node){
      const v = this.values;
      v.push(node);

      let childIdx = v.length - 1;
      let parentIdx = ~~((childIdx - 1) / 2);

      function checkPosition(arr, c, p) {
        if (arr[p].priority <= arr[c].priority) return;

        [arr[p], arr[c]] = [arr[c], arr[p]];

        let child = p;
        let par = ~~((child - 1) / 2);

        checkPosition(v, child, par);
      }

      checkPosition(v, childIdx, parentIdx);
    }


    removeHead() {
      const v = this.values;
      [v[0], v[v.length - 1]] = [v[v.length - 1], v[0]];
      const firstPriority = v.pop();

      let rootIdx = 0;

      let childIdx = this.getChild(v, rootIdx);

        while (!!v[childIdx] && v[rootIdx].priority > v[childIdx].priority) {
          [v[childIdx], v[rootIdx]] = [v[rootIdx], v[childIdx]];

          rootIdx = childIdx;

          childIdx = this.getChild(v, rootIdx);
        }

      return firstPriority;

    }


    // Recursive
    remove(){
      const v = this.values;
      [v[0], v[v.length - 1]] = [v[v.length - 1], v[0]];
      const firstPriority = v.pop();

      let rootIdx = 0;
      let childIdx = this.getChild(v, rootIdx);

      function checkPosition(arr, p, c, fn) {
        if (!arr[c] || (arr[p].priority <= arr[c].priority)) return;

        [arr[p], arr[c]] = [arr[c], arr[p]];

        let par = c;
        let ch = fn(v, par);

        checkPosition(v, par, ch, fn);
      }

      checkPosition(v, rootIdx, childIdx, this.getChild);

      return firstPriority;
    }


    getChild(arr, i){
      if (!!arr[(i * 2) + 1]) {
       return !arr[(i * 2) + 2] || (arr[(i * 2) + 1].priority < arr[(i * 2) + 2].priority) ?
        (i * 2) + 1 : (i * 2) + 2;
      }
      return null;
    }
  }



  let q = new PriorityQueue();
  q.values = [
    {
      val: "top",
      priority: 1
    },
    {
      val: "second",
      priority: 2
    },
    {
      val: "next",
      priority: 5
    },
    {
      val: "low",
      priority: 10
    }
  ];

  q.insertNode(new Node("new", 4));

  q.insertNode(new Node("newest", 3));

  q.remove();
  q.remove();

  console.log(q);