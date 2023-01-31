class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def add_head(self, val):
        node = Node(val)

        if self.length: node.next = self.head
        else: self.tail = node

        self.head = node
        self.length += 1

    def add_tail(self, val):
        node = Node(val)

        if self.length:
            self.tail.next = node
        else: self.head = node

        self.tail = node
        self.length += 1

    def remove_head(self):

        if self.head: head = self.head.val
        else: return None

        if self.length == 1: self.tail = None
        self.head = self.head.next

        self.length -= 1
        return head

    def remove_tail(self):
        if self.tail: tail = self.tail.val
        else: return None

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            curr = self.head

            while curr:
                if curr.next is self.tail:
                    curr.next = None
                    self.tail = curr

                curr = curr.next

        self.length -= 1
        return tail

    def contains_node(self, val):
        if not self.length: return False

        curr = self.head

        while curr:
            if curr.val == val: return True
            curr = curr.next

        return False


l = LinkedList()
l.add_head(10)
l.add_head(8)
l.add_tail(13)
l.add_head(5)
l.add_tail(15)
l.remove_head()
l.remove_tail()
l.contains_node(5)
l.contains_node(10)

# 5, 8, 10, 13, 15