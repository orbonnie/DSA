class MaxHeap:
    def __init__(self):
        self.values = []

    def insert(self, val):
        v = self.values
        v.append(val)

        child = len(v) - 1
        parent = (child - 1) // 2

        def check_pos(lst, par, ch):
            if par < 0 or (lst[par] >= lst[ch]): return

            lst[par], lst[ch] = lst[ch], lst[par]
            child = par
            parent = (child - 1) // 2

            check_pos(lst, parent, child)

        check_pos(v, parent, child)


    def remove_root(self):
        v = self.values
        end = len(v) - 1

        v[0], v[end] = v[end], v[0]
        max = v.pop()

        def getChild(lst, i):
            if len(lst) - 1 <  (i * 2) + 1: return None
            if len(lst) - 1 <  (i * 2) + 2: return (i * 2) + 1

            return (i * 2) + 1 if lst[(i * 2) + 1] > lst[(i * 2) + 2] else (i * 2) + 2

        root = 0
        child = getChild(v, root)

        def check_pos(lst, par, ch):
            if (not ch or lst[par] >= lst[ch]): return

            lst[par], lst[ch] = lst[ch], lst[par]
            parent = ch
            child = getChild(lst, parent)

            check_pos(lst, parent, child)


        check_pos(v, root, child)

        return max



heap = MaxHeap()
heap.insert(14)
heap.insert(22)
heap.insert(35)
heap.insert(40)
heap.insert(4)
heap.insert(18)
heap.insert(30)