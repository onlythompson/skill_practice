
class SinglyLikedListNode:
    data:int
    next:None
    def __init__(self, data, node=None) -> None:
        self.data = data
        self.next = node

def has_cycle(head):
    _map = set()
    while head is not None:
        print(head.data,end="->")
        # print(head, head.data,end="->")
        if head in _map:
            return False
        else:
            _map.add(head)
        head = head.next
    return True


head_node = SinglyLikedListNode
head_node.data = 0

first_node = SinglyLikedListNode
first_node.data = 1

second_node = SinglyLikedListNode(2)
third_node = SinglyLikedListNode(3)


head_node.next = first_node
first_node.next = second_node
second_node.next = third_node


print(has_cycle(head_node))

third_node.next = head_node

print(has_cycle(head_node))