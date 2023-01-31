class Node:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None

class DoubleLL:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def add_head(self, val):
        node = Node(val)

        if self.length:
            self.head.prev = node
            node.next = self.head
        else: self.tail = node

        self.head = node
        self.length += 1

    def add_tail(self, val):
        node = Node(val)

        if self.length:
            self.tail.next = node
            node.prev = self.tail
        else: self.head = node

        self.tail = node
        self.length += 1

    def remove_head(self):
        if self.length:
            head = self.head.val

            self.head.next.prev = None
            self.head = self.head.next

            if self.length == 1: self.tail = None

            self.length -= 1
            return head

        else: return None

    def remove_tail(self):
        if self.length:
            tail = self.tail.val
            self.tail.prev.next = None
            self.tail = self.tail.prev

            if self.length == 1:
                self.head = None

            self.length -= 1
            return tail

        else: return None

    def contains_node(self, val):
        curr = self.head

        while curr:
            if curr.val == val: return True
            curr = curr.next

        return False



dl = DoubleLL()
dl.add_head(9)
dl.add_head(8)
dl.add_tail(3)
dl.add_tail(4)