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
    console.log(current);
    while (current) {
      str += current.data + "-->"; // Corrected to use current.data
      current = current.next;
    }
    console.log(str); // Added console.log to display the elements
  }

  insertion(element,index) {
    let node = new Node(element);
    let current, prev;
    if (index < 0 || index > this.size) {
      console.log("you cant insert element ");
    } else {
      if (index === 0) {
        this.node = this.head;
        this.head = node;
      } else {
        let count = 0;
        current=this.head
        while (count < index) {
          count++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
    }
    this.size++
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
object.insertion(21,2)
object.traversal()
