from collections import deque

class Queue:
    def __init__(self):
        self.storage = deque()

    def enqueue(self, val):
        self.storage.append(val)

    def dequeue(self):
        if len(self.storage):
            return self.storage.popleft()

        return None


q = Queue()

q.enqueue(2)
q.enqueue(4)
q.enqueue(6)
q.enqueue(8)