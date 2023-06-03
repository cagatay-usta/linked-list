class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head == null) return this.prepend(value);
    let tmp = this.head;
    while (tmp.next != null) tmp = tmp.next;
    tmp.next = new Node(value);
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  size() {
    let tmp = this.head;
    let counter = 0;
    while (tmp != null) {
      counter++;
      tmp = tmp.next;
    }
    return counter;
  }

  tail() {
    let tmp = this.head;
    while (tmp.next != null) tmp = tmp.next;
    return tmp;
  }

  at(index) {
    let tmp = this.head;
    if (tmp == null) return `Not found`;
    for (let i = 0; i < index; i++) {
      if (tmp.next == null) return `Not found`;
      tmp = tmp.next;
    }
    return tmp;
  }

  pop() {
    if (this.size() === 1) return (this.head = null);
    if (this.size() === 0) return console.log("List is already empty");
    let cur = this.head;
    let prev = null;
    while (cur.next != null) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  }

  contains(value) {
    let tmp = this.head;
    if (tmp == null) return false;
    while (tmp.next != null) {
      if (tmp.value === value) return true;
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let counter = 0;
    while (tmp.next != null) {
      if (tmp.value === value) return counter;
      counter++;
      tmp = tmp.next;
    }
    return `Not found`;
  }

  insertAt(value, index) {
    if (index === 0) return this.prepend(value);
    let cur = this.head;
    let prev = null;
    let counter = 0;
    while (cur != null && counter != index) {
      prev = cur;
      cur = cur.next;
      counter++;
    }
    if (counter != index) return console.log(`index not found`);
    let node = new Node(value);
    prev.next = node;
    node.next = cur;
  }

  removeAt(index) {
    if (index === 0) return (this.head = this.head.next);
    let cur = this.head;
    let prev = null;
    let counter = 0;
    while (cur != null && counter != index) {
      prev = cur;
      cur = cur.next;
      counter++;
    }
    if (counter != index) return console.log(`index not found`);
    prev.next = cur.next;
    cur = null;
  }

  toString() {
    let tmp = this.head;
    let print = "";
    while (tmp != null) {
      print += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }
    print += "null";
    console.log(print);
  }
}

let list = new LinkedList();

list.append("2");
list.append("5");
list.toString(); // (2) -> (5) -> null

list.append("4");
list.toString(); // (2) -> (5) -> (4) -> null

list.prepend("1");
list.toString(); // (1) -> (2) -> (5) -> (4) -> null
console.log(list.size()); // 4
console.log(list.at(3)); // Node {value: '4', next: null}

list.pop();
list.toString(); // (1) -> (2) -> (5) -> null

console.log(list.contains("2")); // true
console.log(list.find("2")); // 1

list.insertAt("3", 2);
list.toString(); // (1) -> (2) -> (3) -> (5) -> null

list.removeAt(1);
list.toString(); // (1) -> (3) -> (5) -> null

let emptylist = new LinkedList();
emptylist.append("31");
emptylist.toString(); // (31) -> null
emptylist.pop();
emptylist.toString(); // null
emptylist.pop(); // List is already empty
emptylist.toString(); // null
emptylist.insertAt(2, 2); // index not found
emptylist.removeAt(4); // index not found
console.log(emptylist.contains("4")); // false
