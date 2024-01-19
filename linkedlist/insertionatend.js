class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  traversal() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.data + "-->"; // Corrected to use current.data
      current = current.next;
    }
    console.log(str); // Added console.log to display the elements
  }

  insertionatend(element) {
    let node = new Node(element);
    let current;
    let count = 0;
    current = this.head;
    console.log(this.size);

    while (count < this.size - 1) {
      count++;

      current = current.next;
    }

    current.next = node;
    node.next = null;
  }
}

let object = new LinkedList();
object.add(11);
object.add(12);
object.add(90);
object.add(9);
object.add(8);
object.add(4);
object.traversal(); // Call traversal method to display the elements
object.insertionatend(89);
object.traversal();
