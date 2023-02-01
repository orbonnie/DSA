const FunctionalQueue = () => {
  const q = {};
  q.storage = {};
  q.end = 0;
  q.front = 0;
  q.size = 0;

  q.enqueue = (val) => {
    q.storage[q.end] = val;
    q.end++;

    q.size = q.end - q.front;
    return q.size;
  };

  q.dequeue = () => {
    if (q.end) {
      const result = q.storage[q.front];
      delete q.storage[q.front];
      const length = Object.keys(q.storage).length;
      q.front = q.end - length;
      return result;
    } else return null;
  }

  return q;
}