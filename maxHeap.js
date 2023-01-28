class maxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    const v = this.values;
    v.push(val);
    let index = v.length - 1;
    let parent_index = ~~((index - 1) / 2);


    while (v[parent_index] < v[index]) {
      [v[parent_index], v[index]] = [v[index], v[parent_index]];
      index = parent_index;
      parent_index = ~~((index - 1) / 2);
    }

  }

  // Recursive solution

  insertNode(val) {
    const v = this.values;
    v.push(val);
    let index = v.length - 1;
    let parent_index = ~~((index - 1) / 2);

    function checkPosition(arr, c, p){
      if (arr[p] >= arr[c]) {
        return;
      }

      [arr[p], arr[c]] = [arr[c], arr[p]];
      let child = p;
      let parent = ~~((child - 1) / 2);

      checkPosition(arr, child, parent);
    }

    checkPosition(v, index, parent_index)
  }




  extract_max() {
    const v = this.values;

    [v[0], v[v.length - 1]] = [v[v.length - 1], v[0]];

    const max = v.pop();

    let root = 0;
    let child = (v[(root * 2) + 1] > v[(root * 2) + 2]) || !v[(root * 2) + 2] ?
        (root * 2) + 1 : (root * 2) + 2;

    if (child) {
      while(v[root] < v[child]) {
        [v[root], v[child]] = [v[child], v[root]];
        root = child;
        child = (v[(root * 2) + 1] > v[(root * 2) + 2]) || !v[(root * 2) + 2] ?
        (root * 2) + 1 : (root * 2) + 2;
      }
    }

    return max;
  }

  // Recursive solution

  extractMax(){
    const v = this.values;

    [v[0], v[v.length - 1]] = [v[v.length - 1], v[0]];

    const max = v.pop();

    let root = 0;
    let child = this.getChild(v, root);

    function checkPosition(arr, p, c, fn) {
      if (!arr[c] || arr[p] >= arr[c]) return;

      [arr[p], arr[c]] = [arr[c], arr[p]];

      let par = c;
      let ch = fn(v, par);

      checkPosition(v, par, ch, fn);
    }

    checkPosition(v, root, child, this.getChild);

    return max;
  }

  getChild(arr, i){
    if (arr[(i * 2) + 1]) {
     return (arr[(i * 2) + 1] > arr[(i * 2) + 2]) || !arr[(i * 2) + 2] ?
        (i * 2) + 1 : (i * 2) + 2;
    }
    return null;
  }
}

let heap = new maxHeap();
heap.values = [41, 39, 33, 18, 36, 12];
heap.insertNode(55)
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.insertNode(22);
heap.extractMax();

console.log("heap", heap);