class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority

class PriorityQueue:
    def __init__(self):
        self.values = []

    def insert(self, node):
        v = self.values
        v.append(node)

        child = len(v) - 1
        parent = (child - 1) // 2

        def check_pos(lst, p, c):
            if p < 0 or (lst[p].priority <= lst[c].priority): return

            lst[p], lst[c] = lst[c], lst[p]
            child = p
            parent = (child - 1) // 2

            check_pos(v, parent, child)

        check_pos(v, parent, child)

    def remove(self):
        v = self.values
        end = len(v) - 1

        v[0], v[end] = v[end], v[0]
        top_priority = v.pop()

        def get_child(lst, i):
            if len(lst) - 1 < (i * 2) + 1: return
            if len(lst) - 1 < (i * 2) + 2: return (i * 2) + 1

            return (i * 2) + 1 if lst[(i * 2) + 1].priority < lst[(i * 2) + 2].priority else (i * 2) + 2


        parent = 0
        child = get_child(v, parent)

        def check_pos(lst, p, c):
            if not c or lst[p].priority <= lst[c].priority: return

            lst[p], lst[c] = lst[c], lst[p]
            parent = c
            child = get_child(lst, parent)

            check_pos(v, parent, child)

        check_pos(v, parent, child)

        return top_priority


q = PriorityQueue()
q.insert(Node("first", 1))
q.insert(Node("next", 3))
q.insert(Node("then", 6))
q.insert(Node("low", 10))
q.insert(Node("second", 2))
q.insert(Node("mid", 8))
q.insert(Node("fourth", 4))

