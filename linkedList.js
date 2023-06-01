class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new Node("2");
let node2 = new Node("5");
node1.nextNode = node2;
let list = new LinkedList(node1);
console.log(list);
