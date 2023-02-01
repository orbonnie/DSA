const FunctStack = () => {
  const stack = {};
  stack.storage = {};

  stack.size = () => {
      return Object.keys(stack.storage).length;
  }

  stack.push = (val) => {
      let next = stack.size();
      stack.storage[next] = val;
  }

  stack.pop = () => {
      let next = stack.size() - 1;
      let result = stack.storage[next];
      delete stack.storage[next];

      return result;
  }

  return stack;
}

var fs = FunctStack();
fs.push(2);
fs.push(4);
fs.push(6);
fs.push(8);
fs.push(10);