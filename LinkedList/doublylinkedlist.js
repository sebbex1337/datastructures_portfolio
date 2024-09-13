class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    dumpList() {
        let current = this.head;
        console.log("Linked List");
        console.log("============");
        console.log("Head: ", this.head.data);
        console.log("Tail: ", this.tail.data);
        console.log("============");
        while (current) {
            console.log("Node: ", current.data);
            console.log("-------------");
            console.log("Prev: ", current.prev ? current.prev.data : null);
            console.log("Next: ", current.next ? current.next.data : null);
            current = current.next;
            console.log(" ");
        }
    }
    addNodeLast(data) {
        const newTail = new Node(data);
        let currentTail = this.tail;
        if (currentTail != null) {
            currentTail.next = newTail;
            newTail.prev = currentTail;
            this.tail = newTail;
            this.length++;
            return;
        }
        if (this.head == null) {
            this.head = newTail;
            this.tail = newTail;
            this.length++;
            return;
        }
    }

    addNodeFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    removeLast() {
        let current = this.tail;
        if (current != null) {
            this.tail = current.prev;
            this.tail.next = null;
            this.length--;
            return;
        }
        if (this.head != null && this.head == current) {
            this.head = null;
            this.length--;
            return;
        }
    }
    removeFirst() {
        let current = this.head;
        if (current != null) {
            this.head = current.next;
            this.head.prev = null;
            this.length--;
            return;
        }
        if (this.tail != null && this.tail == current) {
            this.tail = null;
            this.length--;
            return;
        }
    }

    removeNode(data) {
        let current = this.head;
        if (current.data == data) {
            this.head = current.next;
            this.head.prev = null;
            this.length--;
            return;
        }
        while (current) {
            if (current.data == data) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    size() {
        return this.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    /* addNodeLast(newNode) {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    } */
}

const list = new DoublyLinkedList();
list.addNodeLast("A");
list.addNodeLast("B");

list.addNodeFirst("C");
list.addNodeFirst("D");

list.addNodeFirst("E");
list.addNodeLast("O");
list.dumpList();
list.removeLast();
list.dumpList();

console.log(list.size());
