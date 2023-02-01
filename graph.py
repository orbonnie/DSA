class Node:
    def __init__(self, val):
        self.val = val
        self.adjacencies = set()

class Graph:
    def __init__(self):
        self.adjacencyList = dict()

    def add_vertex(self, node):
        self.adjacencyList[node.val] = node.adjacencies

    def add_edge(self, v1, v2):
        l = self.adjacencyList
        l[v1.val].add(v2)
        l[v2.val].add(v1)

    def remove_vertex(self, v):
        l = self.adjacencyList
        for a  in l[v.val]:
            l[a.val].remove(v)

        del l[v.val]

    def remove_edge(self, v1, v2):
        l = self.adjacencyList
        l[v1.val].discard(v2)
        l[v2.val].discard(v1)

    def contains(self, v):
        return v.val in self.adjacencyList.keys()


g = Graph()
n1 = Node("Fred")
n2 = Node("Penny")
n3 = Node("Molly")
n4 = Node("Bob")
n5 = Node("Jenny")
n6 = Node("Jim")

g.add_vertex(n1)
g.add_vertex(n2)
g.add_vertex(n3)
g.add_vertex(n4)
g.add_vertex(n5)
g.add_vertex(n6)

g.add_edge(n1, n3)
g.add_edge(n1, n4)
g.add_edge(n2, n3)
g.add_edge(n5, n6)
g.add_edge(n1, n6)
g.add_edge(n5, n3)

g.remove_vertex(n6)
g.remove_edge(n2, n3)