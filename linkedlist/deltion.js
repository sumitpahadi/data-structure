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

  deletion(index) {
    if (index<0 || index> this.size) {
        console.log("can't remove element from linked list")
        
    }
    else if (index == 0) {
      this.head = this.head.next;
    } else {
      let pre, curreent;
      let count = 0;
      curreent = this.head;
      while (count < index) {
        count++;
        pre = curreent;
        curreent=curreent.next
      }
 
      pre.next = curreent.next;
    }
    this.size--;
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
}

let object = new LinkedList();
object.add(11);
object.add(12);
object.add(90);
object.add(9);
object.add(8);
object.add(4);
object.traversal(); // Call traversal method to display the elements
object.deletion(20);
object.traversal(); // Call traversal method to display the elements
