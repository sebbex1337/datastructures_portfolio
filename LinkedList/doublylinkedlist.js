class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  addFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    let current = this.nodeAt(index);
    return current ? current.data : null;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  insertAfter(index, data) {
    let current = this.nodeAt(index);
    if (!current) return;
    const newNode = new Node(data);
    newNode.next = current;
    newNode.prev = current.prev;
    if (current.prev) current.prev.next = newNode;
    current.prev = newNode;
    if (current === this.head) this.head = newNode;
    this.length++;
  }

  first() {
    return this.head ? this.head.data : null;
  }

  last() {
    return this.tail ? this.tail.data : null;
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data == data) {
        this.removeNode(current);
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeIndex(index) {
    let current = this.nodeAt(index);
    if (!current) return null;
    this.removeNode(current);
    return current.data;
  }

  removeFirst() {
    if (!this.head) return null;
    const data = this.head.data;
    this.removeNode(this.head);
    return data;
  }

  removeLast() {
    if (!this.tail) return null;
    const data = this.tail.data;
    this.removeNode(this.tail);
    return data;
  }

  addNodeLast(newNode) {
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insertAfterNode(newNode, existingNode) {
    newNode.next = existingNode.next;
    newNode.prev = existingNode;
    if (existingNode.next) existingNode.next.prev = newNode;
    existingNode.next = newNode;
    if (existingNode === this.tail) this.tail = newNode;
    this.length++;
  }

  insertBeforeNode(newNode, existingNode) {
    newNode.next = existingNode;
    newNode.prev = existingNode.prev;
    if (existingNode.prev) existingNode.prev.next = newNode;
    existingNode.prev = newNode;
    if (existingNode === this.head) this.head = newNode;
    this.length++;
  }

  removeNode(existingNode) {
    if (existingNode.prev) existingNode.prev.next = existingNode.next;
    if (existingNode.next) existingNode.next.prev = existingNode.prev;
    if (existingNode === this.head) this.head = existingNode.next;
    if (existingNode === this.tail) this.tail = existingNode.prev;
    this.length--;
  }

  nodeAt(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  swapNodes(nodeA, nodeB) {
    if (nodeA === nodeB) return;
    let temp = nodeA.data;
    nodeA.data = nodeB.data;
    nodeB.data = temp;
  }

  clear() {
    this.head = this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  dumpList() {
    let current = this.head;
    while (current) {
      console.log(
        `Data: ${current.data}, Next: ${current.next ? current.next.data : null}, Prev: ${
          current.prev ? current.prev.data : null
        }`
      );
      current = current.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
