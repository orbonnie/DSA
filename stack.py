class Stack:
    def __init__(self):
        self.storage = {}
        self.size = 0

    def push(self, val):
        self.storage[self.size] = val
        self.size += 1
        return self.size

    def pop(self):
        if self.size:
            result = self.storage[self.size - 1]
            del self.storage[self.size - 1]
            self.size -= 1

            return result
        else: return None

s = Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)