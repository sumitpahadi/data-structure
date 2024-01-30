class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, make the new node the head and point it to itself
      this.head = newNode;
      this.head.next = this.head;
    } else {
      // Traverse the list to find the last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }

      // Append the new node to the end and make it point back to the head
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  deletion_element(element) {
    if (this.head == null) {
      console.log("no value in circular list");
    } else {
      let current = this.head;
      let pre = null;
      while (current.data != element && current.next != this.head) {
        pre = current;
        current = current.next;
      }
      if (current.data != element) {
        console.log("element not found");
      }
      if (current == this.head) {
        while (current.next != this.head) {
          current = current.next;
        }
        if (this.head === this.head.next) {
          this.head = null;
        } else {
          current.next = this.head.next;
          this.head = this.head.next;
        }
      } else {
        pre.next = current.next;
      }
    }
  }
  display() {
    let current = this.head;


    if (!current) {
      console.log("List is empty");
      return;
    }
    let str = "";

    do {
      str += current.data + "->";
      current = current.next;
    } while (current !== this.head);
    console.log(str);
    
  }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(5);
circularList.append(6);
circularList.append(7);
circularList.append(12);
circularList.append(31);

circularList.display();
circularList.deletion_element(1);
circularList.display();
